"use client"
import styles from "./about-cards.module.scss"
import Image from "next/image"
import cardPrice from "@/assets/svg/card-price.png"


export default function AboutCards({ data, id }) {
  const keyId = id.params.id;
  
  // fech
  const priceCardTitle = "ОПИС: " + data[keyId].attributes.title;
  const priceCardPreDescription = data[keyId].attributes.description;
  const priceCardDescription = data[keyId].attributes.about;

  return (
    <section className={styles.section} id="about-card">
      <div className={styles.container}> 
        <div className={styles.container_text}>
          <h2 className={styles.about_title}>{priceCardTitle}</h2>
          <p className={styles.about_text} style={{marginBottom: "30px"}}>
            {priceCardPreDescription}
          </p>
            
          <p className={styles.about_text}>{priceCardDescription}</p>
        </div>
          <div className={styles.container_btn}>
            <div className={styles.image_container}>
              <Image 
                src={cardPrice}
                alt="Image"
                priority={true}
                loading="eager"
                quality={100}
                className={styles.img}
              />
            </div>
          </div>
      </div>
    </section>
  )
}