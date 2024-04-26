"use client"
import styles from "./about-store.module.scss"
import Image from "next/image"
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import baby from "@/assets/svg/baby.png";
import cardPrice from "@/assets/svg/card-price.png"


const homeTitle = "Наш магазин, за фактом, це marketplace, де будь-який покупець зможе вибрати все, що йому потрібно.";
const homeDescription = "При цьому кожна продукція має сертифіковану якість. І тепер немає необхідності відвідувати різноманітні традиційні магазини, витрачати час на черги і поїздку до потрібного місця, адже користуючись нашими послугами, Ви зможете придбати товар, не виходячи з дому. Будучи, наприклад, на обіді, в транспорті, в відрядженні - в будь-який час і незалежно від свого місцезнаходження оглянути наш електронний каталог, вибрати цікавить і здійснити замовлення. А так як інтернет-магазинах немає потреби в оренді торговельного майданчика, а також в утриманні великого штату співробітників-продавців, ми продаємо вироби з найбільш оптимальною і демократичною вартістю. Тому покупку товару у нас зможе дозволити собі кожен без навантаження на свій бюджет і фінанси."


export default function AboutStore({data, id}) {
  const [isImg, setIsImg] = useState(baby);
  const [isBtn, setIsBtn] = useState(true);
  const [isSection, setIsSection] = useState(false);
  const [isTitle, setIsTitle] = useState(homeTitle);
  const [isDescription, setIsDescription] = useState(homeDescription);
  const [isDescriptionTwo, setIsDescriptionTwo] = useState(homeDescription);

  const path = usePathname().replace("/", "");
  const priceCard = path.includes("price");

  const keyId = id.params.id;
  
  // fech
  const priceCardTitle = "ОПИС: " + data[id.params.id].attributes.title;
  const priceCardPreDescription = data[id.params.id].attributes.preAbout;
  const priceCardDescription = data[id.params.id].attributes.about;



  useEffect(() => {
    switch (true) {

      case priceCard:
        setIsImg(cardPrice);
        setIsTitle(priceCardTitle);
        setIsDescription(priceCardDescription);
        setIsDescriptionTwo(priceCardPreDescription);
        setIsSection(true);
        setIsBtn(false);
        break;
    }
  }, []);

  return (
    <section className={isSection ? styles.section : styles.section_home} id="about-card">
      <div className={styles.container}> 
        <div className={styles.container_text}>
          <h2 className={styles.about_title}>{isTitle}</h2>
          <p className={styles.about_text} style={{marginBottom: "30px"}}>
            {isDescriptionTwo}
          </p>
            
          <p className={styles.about_text}>{isDescription}</p>
        </div>
          <div className={styles.container_btn}>
            <div className={styles.image_container}>
              <Image 
                src={isImg}
                alt="Image"
                priority={true}
                loading="eager"
                quality={100}
                className={styles.img}
              />
            </div>
            {isBtn && <button className={styles.btn}>ВІДГУКИ</button>}
          </div>
      </div>
    </section>
  )
}