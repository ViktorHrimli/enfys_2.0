"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./about-cards-gallary.module.scss";
import { getFormById } from "@/shared/getFormById";

import PartnersIcon from "@/shared/icons/partners";
import Preview from "./preview/preview";


export default function AboutCards({ data, id }) {
  const [isGallery, setIsGallery] = useState(`https://www.admin-enfys.space${data[id.params.id].attributes.gallery.data[0].attributes.url}`);
  const [isBacground, setIsBacground] = useState(0);

  const [isPreview, setIsPreview] = useState(false);
  const [isScroll, setIsScroll] = useState(
    typeof window !== "undefined" ? window.scrollY : 0
  );


  useEffect(() => {
    if (isPreview) {
      setIsScroll(window.scrollY);

      document.body.style.overflow = "hidden";
      document.body.style.maxHeight = "100vh";
    }
    
    window.scrollTo(0, isScroll);

    return () => {
      document.body.style.overflowX = "hidden";
      document.body.style.maxHeight = "";
    };
  }, [isPreview]);

  const handleClickOnDescription = () => {
    getFormById("about-card");
  };


  const keyId = id.params.id;
  const tableList = data[keyId].attributes.table;
  const galleryLength = data[keyId].attributes.gallery.data.length;

  return (
    <>
    <section className={styles.section}>
      <div className={styles.container}>
        {/* gallery */}
          <div className={styles.gallery}>
            <div className={styles.img_container} onClick={()=> setIsPreview(true)}>
              <Image 
                src={isGallery}
                alt="image"
                priority={true}
                loading="eager"
                quality={100}
                width={100}
                height={100}
                className={styles.gallery_img}
              />
              <svg className={styles.fullsreen} xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24"><path fill="#209487" d="M5 19h2.923q.213 0 .356.144t.144.357t-.144.356t-.356.143H4.808q-.344 0-.576-.232T4 19.192v-3.115q0-.213.144-.356q.144-.144.357-.144q.212 0 .356.144t.143.356zm14.02 0v-2.923q0-.213.143-.356t.357-.144t.356.144q.143.143.143.356v3.115q0 .344-.232.576t-.575.232h-3.116q-.212 0-.356-.144t-.144-.357t.144-.356t.356-.143zM5 5v2.923q0 .213-.144.356t-.357.144t-.356-.144T4 7.923V4.808q0-.344.232-.576T4.808 4h3.115q.213 0 .356.144q.144.144.144.357q0 .212-.144.356T7.923 5zm14.02 0h-2.924q-.212 0-.356-.144t-.144-.357t.144-.356t.356-.143h3.116q.343 0 .575.232t.232.576v3.115q0 .213-.144.356q-.144.144-.356.144q-.213 0-.356-.144t-.144-.356z"/></svg>
            </div>
          <div className={styles.container_list}>
          <ul className={styles.list}>
          {data[keyId].attributes.gallery.data.map(( item , id) => (
            <li
              key={id}
              className={styles.items}
              onClick={() => setIsGallery(`https://www.admin-enfys.space${data[keyId].attributes.gallery.data[id].attributes.url}`)
                & setIsBacground(id)}>
              <div className={id === isBacground ?  "" : styles.bacground}></div>
                <Image 
                  src={`https://www.admin-enfys.space${item.attributes.url}`}
                  alt="item"
                  priority={true}
                  loading="eager"
                  quality={100}
                  width={100}
                  height={100}
                  style={{objectFit: "cover"}}
                />
            </li>
          ))}
          </ul>
          </div>
        </div>
        {/* ------- */}
        <div className={styles.container_text}>
            <h2 className={styles.title}>
              {data[id.params.id].attributes.title}
          </h2>
          <span className={styles.art}>Артикул: {data[id.params.id].attributes.articl}</span>
            <div className={styles.container_price}>
              {data[id.params.id].attributes.inStock === "в наявності"
              ?
              <p className={styles.price}>
                  {data[id.params.id].attributes.price} ГРИВЕНЬ
                <span className={styles.old_price}>{data[id.params.id].attributes.oldPrice} ГРИВЕНЬ</span>
              </p>
              : 
                data[id.params.id].attributes.inStock === "очікуємо" ?  
              <p className={styles.price}>{data[id.params.id].attributes.inStock}</p>
                  :
              <p className={styles.price}>{data[id.params.id].attributes.inStock}</p>
              }
              
            <PartnersIcon />
          </div>
            <p className={styles.text}>{data[id.params.id].attributes.description}....
              <a onClick={handleClickOnDescription}> читати повний опис</a>
            </p>
            <button className={styles.btn}>купити</button>
            <ul style={{ color: "black" }}>
              {tableList.map(({ title, value }, id) => (
                <li key={id}>
                  {title}
                  {value}
                </li>
              ))}</ul>
        </div>
      </div>
      </section>
      {isPreview && <Preview
        data={data}
        keyId={keyId}
        setIsPreview={setIsPreview}
        galleryLength={galleryLength}
        setIsGallery={setIsGallery}
      />}
  </>
  )
}