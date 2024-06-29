"use client";
import { useState, useEffect, useRef } from "react";

import Image from "next/image";
import styles from "./about-cards-gallary.module.scss";
import { getFormById } from "@/shared/getFormById";
import { slugify } from 'transliteration';


import PartnersIcon from "@/shared/icons/partners";
import Preview from "./preview/preview";
import PayModal from "@/libs/modal/modal-pay/modal-pay";
import FilterItem from "./filters-color/filter-item";
import BreadCrumbs from "../bread-crumbs/bread_crumbs";

export default function AboutCardsGallery({ data, dollar, dataBase }) {

  // console.log("data:",data[49]);
  const [isGallery, setIsGallery] = useState(
    `https://www.admin-enfys.space${data[0].attributes.gallery.data[0].attributes.url}`
  );

  const [isBacground, setIsBacground] = useState(0);

  const [isPreview, setIsPreview] = useState(false);
  const [isScroll, setIsScroll] = useState(0);
  const [isPay, setIsPay] = useState(false);

  const [storedItems, setStoredItems] = useState([]);

  const ulRef = useRef(null);

  const scrollToPosition = (event, { id }) => {
    event.preventDefault();
    event.stopPropagation();
    if (id === 4) {
      if (ulRef.current) {
        const listItems = ulRef.current.querySelectorAll("li");
        const lastListItem = listItems[listItems.length - 1];
        lastListItem.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    }
  };

  useEffect(() => {
    if (isPreview) {
      setIsScroll(window.scrollY);

      document.body.style.overflow = "hidden";
      document.body.style.maxHeight = "100vh";
    }
    else if (isPay) {
      setIsScroll(window.scrollY);

      document.body.style.overflow = "hidden";
      document.body.style.maxHeight = "100vh";
    }

    window.scrollTo(0, isScroll);

    return () => {
      document.body.style.overflowX = "hidden";
      document.body.style.maxHeight = "";
    };
  }, [isPreview, isPay]);

  const handleClickOnDescription = () => {
    getFormById("about-card");
  };

  const keyId = 0;
  const galleryLength = data[keyId].attributes.gallery.data.length;

  const ImageCard = `https://www.admin-enfys.space${data[0].attributes.gallery.data[0].attributes.url}`;
  const TitleCards = data[keyId].attributes.title;
  const QuantityCards = 1;
  const PriceCards = Math.floor(data[keyId].attributes.price * dollar) * QuantityCards;

  useEffect(() => {
    var localeData = JSON.parse(localStorage.getItem("storedItems"));
    localeData && setStoredItems(localeData);
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    setIsPay(true);

    const existingData = JSON.parse(localStorage.getItem("storedItems")) || [];
    const newCardData = {
      ImageCards: ImageCard,
      TitleCards: TitleCards,
      PriceCards: PriceCards,
      QuantityCards: QuantityCards,
    };
    
    const updatedData = [...existingData, newCardData];
    setStoredItems(updatedData);
    localStorage.setItem("storedItems", JSON.stringify(updatedData));
  };

  return (
    <>
      <BreadCrumbs data={data}/>
      
      <section className={styles.section}>
        <div className={styles.container}>
          {/* gallery */}
          <div className={styles.gallery}>
            <div
              className={styles.img_container}
              onClick={() => setIsPreview(true)}
            >
              <Image
                src={isGallery}
                alt="image"
                priority={true}
                loading="eager"
                // quality={100}
                width={100}
                height={100}
                className={styles.gallery_img}
              />
              <svg
                className={styles.fullsreen}
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#209487"
                  d="M5 19h2.923q.213 0 .356.144t.144.357t-.144.356t-.356.143H4.808q-.344 0-.576-.232T4 19.192v-3.115q0-.213.144-.356q.144-.144.357-.144q.212 0 .356.144t.143.356zm14.02 0v-2.923q0-.213.143-.356t.357-.144t.356.144q.143.143.143.356v3.115q0 .344-.232.576t-.575.232h-3.116q-.212 0-.356-.144t-.144-.357t.144-.356t.356-.143zM5 5v2.923q0 .213-.144.356t-.357.144t-.356-.144T4 7.923V4.808q0-.344.232-.576T4.808 4h3.115q.213 0 .356.144q.144.144.144.357q0 .212-.144.356T7.923 5zm14.02 0h-2.924q-.212 0-.356-.144t-.144-.357t.144-.356t.356-.143h3.116q.343 0 .575.232t.232.576v3.115q0 .213-.144.356q-.144.144-.356.144q-.213 0-.356-.144t-.144-.356z"
                />
              </svg>
            </div>
            <div className={styles.container_list}>
              <ul className={styles.list} ref={ulRef}>
                {data[keyId].attributes.gallery.data.map((item, id) => (
                  <li
                    key={id}
                    className={styles.items}
                    onClick={() =>
                      setIsGallery(
                        `https://www.admin-enfys.space${data[keyId].attributes.gallery.data[id].attributes.url}`
                      ) &
                      setIsBacground(id) &
                      scrollToPosition(event, { id })
                    }
                  >
                    <div
                      className={id === isBacground ? "" : styles.bacground}
                    ></div>
                    <Image
                      src={`https://www.admin-enfys.space${item.attributes.url}`}
                      alt="item"
                      priority={true}
                      loading="eager"
                      quality={100}
                      width={100}
                      height={100}
                      style={{ objectFit: "cover" }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* ------- */}
          <div className={styles.container_text}>
            <h2 className={styles.title}>{data[keyId].attributes.title}</h2>
            <span className={styles.art}>
              Артикул: {data[keyId].attributes.articl}
            </span>
            <div className={styles.container_price}>
              {data[keyId].attributes.inStock === "в наявності" ? (
                <p className={styles.price}>
                  {Math.floor(data[keyId].attributes.price * dollar)} ГРИВЕНЬ
                  <span className={styles.old_price}>
                    {Math.floor(data[keyId].attributes.oldPrice * dollar)}{" "}
                    ГРИВЕНЬ
                  </span>
                </p>
              ) : data[keyId].attributes.inStock === "очікуємо" ? (
                <p className={styles.price}>{data[keyId].attributes.inStock}</p>
              ) : (
                <p className={styles.price}>{data[keyId].attributes.inStock}</p>
              )}

              <PartnersIcon data={data} name={data[keyId].attributes.title} />
            </div>
            <p className={styles.text}>
              {data[keyId].attributes.description}....
              <a onClick={handleClickOnDescription}> читати повний опис</a>
            </p>
            {data[0].attributes.articleCards &&
            <div>
              <p className={styles.text}>Інщі кольори</p>
                <ul className={styles.list_colors}>
                  {data[0].attributes.articleCards.map(({ title }, id) => {
                    const name = slugify(title);
                    return (
                      <li key={id} className={styles.item_colors}>
                          <FilterItem
                            dataBase={dataBase}
                            name={name}
                            key={id}
                          />
                      </li>
                    )
                  })}
                  </ul>
                </div>
              }
            <button className={styles.btn} onClick={handleClick}>купити</button>
          </div>
        </div>
      </section>
      {isPreview && (
        <Preview
          data={data}
          keyId={keyId}
          setIsPreview={setIsPreview}
          galleryLength={galleryLength}
          setIsGallery={setIsGallery}
        />
      )}
      {isPay &&(
        <PayModal
          setIsPay={setIsPay}
          storedItems={storedItems}
          setStoredItems={setStoredItems}
          QuantityCards={QuantityCards}
        />)}
    </>
  );
}
