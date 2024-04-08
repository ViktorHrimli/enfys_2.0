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
            <p className={styles.price}>17 213 ГРИВЕНЬ <span className={styles.old_price}>18665 ГРИВЕНЬ</span></p>
            <PartnersIcon />
          </div>
            <p className={styles.text}>CARRELLO Epica CRL-8509/1 - це легка в управлінні і комфортна коляска з народження і до 3-4 років.  Коляска чудово підійде для прогулянок і поїздок в будь-яку пору року.  Дитячу коляску 2 в 1 CARRELLO Epica CRL-8509 (Каррелл Епіка) вигідно відрізняють від інших колясок 2 в 1 її легка вага і компактна рама прогулянкової коляски....
            <span> читати повний опис</span></p>
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