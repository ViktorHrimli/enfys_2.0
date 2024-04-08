"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./about-cards-gallary.module.scss";


import imgCards from "./img/img-1.png";
import imgCardsOne from "./img/img-2.png";
import PartnersIcon from "@/shared/icons/partners";
import Preview from "./preview/preview";


const gallery = [
  {
    img: imgCards,
  },
  {
    img: imgCardsOne,
  },
  {
    img: imgCards,
  },
  {
    img: imgCardsOne,
  },
  {
    img: imgCards,
  },
];


export default function AboutCards() {
  const [isGallery, setIsGallery] = useState(gallery[0].img);
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

  const galleryLength = gallery.length;

  return (
    <>
    <section className={styles.section}>
      <div className={styles.container}>
        {/* gallery */}
          <div className={styles.gallery}>
            <div className={styles.img} onClick={()=> setIsPreview(true)}>
              <Image 
                src={isGallery}
                alt="image"
                priority={true}
                loading="eager"
                quality={100}
                style={{objectFit: "cover", width: "100%", height: "100%"}}
              />
              <svg className={styles.fullsreen} xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24"><path fill="#209487" d="M5 19h2.923q.213 0 .356.144t.144.357t-.144.356t-.356.143H4.808q-.344 0-.576-.232T4 19.192v-3.115q0-.213.144-.356q.144-.144.357-.144q.212 0 .356.144t.143.356zm14.02 0v-2.923q0-.213.143-.356t.357-.144t.356.144q.143.143.143.356v3.115q0 .344-.232.576t-.575.232h-3.116q-.212 0-.356-.144t-.144-.357t.144-.356t.356-.143zM5 5v2.923q0 .213-.144.356t-.357.144t-.356-.144T4 7.923V4.808q0-.344.232-.576T4.808 4h3.115q.213 0 .356.144q.144.144.144.357q0 .212-.144.356T7.923 5zm14.02 0h-2.924q-.212 0-.356-.144t-.144-.357t.144-.356t.356-.143h3.116q.343 0 .575.232t.232.576v3.115q0 .213-.144.356q-.144.144-.356.144q-.213 0-.356-.144t-.144-.356z"/></svg>
            </div>
          <ul className={styles.list}>
          {gallery.map(({ img }, id) => (
            <li key={id} className={styles.items} onClick={() => setIsGallery(img) & setIsBacground(id)}>
              <div className={id === isBacground ?  "" : styles.bacground}></div>
                <Image 
                  src={img}
                  alt="item"
                  priority={true}
                  loading="eager"
                  quality={100}
                  style={{objectFit: "cover"}}
                />
            </li>
          ))}
        </ul>
        </div>
        {/* ------- */}
        <div className={styles.container_text}>
          <h2 className={styles.title}>Коляска універсальна CARRELLO Epica CRL-8511 (3в1) Almond Beige (Каррелло Епіка)</h2>
          <span className={styles.art}>Артикул: CRL-8511-3</span>
          <div className={styles.container_price}>
              <p className={styles.price}>17 213 ГРИВЕНЬ
                <span className={styles.old_price}>18665 ГРИВЕНЬ</span>
              </p>
            <PartnersIcon />
          </div>
            <p className={styles.text}>CARRELLO Epica CRL-8509/1 - це легка в управлінні і комфортна коляска з народження і до 3-4 років.  Коляска чудово підійде для прогулянок і поїздок в будь-яку пору року.  Дитячу коляску 2 в 1 CARRELLO Epica CRL-8509 (Каррелл Епіка) вигідно відрізняють від інших колясок 2 в 1 її легка вага і компактна рама прогулянкової коляски....
              <span> читати повний опис</span>
            </p>
          <button className={styles.btn}>купити</button>
        </div>
      </div>
      </section>
      {isPreview && <Preview
        gallery={gallery}
        setIsPreview={setIsPreview}
        galleryLength={galleryLength}
        setIsGallery={setIsGallery}
      />}
  </>
  )
}