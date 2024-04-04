"use state"
import styles from "./about-cards-gallary.module.scss";
import Image from "next/image";

import imgCards from "./img/img-1.png";

const gallery = [imgCards, imgCards, imgCards, imgCards]


export default function AboutCards() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* gallery */}
          <div className={styles.gallery}>
            <div className={styles.img}>
              <Image 
                src={imgCards}
                alt="image"
                priority={true}
                loading="eager"
                quality={100}
                style={{objectFit: "cover"}}
              />
          </div>
          <ul className={styles.list}>
          {gallery.map(({ item }, id) => (
            <li key={id} className={styles.items}>
              <Image 
                src={imgCards}
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
          <p className={styles.price}>17 213 ГРИВЕНЬ <span className={styles.old_price}>18665 ГРИВЕНЬ</span></p>
          
          <p className={styles.text}>CARRELLO Epica CRL-8509/1 - це легка в управлінні і комфортна коляска з народження і до 3-4 років.  Коляска чудово підійде для прогулянок і поїздок в будь-яку пору року.  Дитячу коляску 2 в 1 CARRELLO Epica CRL-8509 (Каррелл Епіка) вигідно відрізняють від інших колясок 2 в 1 її легка вага і компактна рама прогулянкової коляски....читати повний опис</p>
          <button className={styles.btn}>купити</button>
        </div>
      </div>
    </section>
  )
}