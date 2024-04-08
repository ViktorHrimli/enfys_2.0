"use client"
import styles from "./about-store.module.scss"
import Image from "next/image"
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import baby from "@/assets/svg/baby.png";
import cardPrice from "@/assets/svg/card-price.png"




const homeTitle = "Наш магазин, за фактом, це marketplace, де будь-який покупець зможе вибрати все, що йому потрібно.";
const homeDescription = "При цьому кожна продукція має сертифіковану якість. І тепер немає необхідності відвідувати різноманітні традиційні магазини, витрачати час на черги і поїздку до потрібного місця, адже користуючись нашими послугами, Ви зможете придбати товар, не виходячи з дому. Будучи, наприклад, на обіді, в транспорті, в відрядженні - в будь-який час і незалежно від свого місцезнаходження оглянути наш електронний каталог, вибрати цікавить і здійснити замовлення. А так як інтернет-магазинах немає потреби в оренді торговельного майданчика, а також в утриманні великого штату співробітників-продавців, ми продаємо вироби з найбільш оптимальною і демократичною вартістю. Тому покупку товару у нас зможе дозволити собі кожен без навантаження на свій бюджет і фінанси."

const priceCardTitle = "Опис Коляска універсальна CARRELLO Epica CRL-8511 (3в1) Almond Beige (Каррелло Епіка)";
const priceCardDescription = "Більшість батьків, як тільки дізнаються що у них скоро з'явиться малюк, починають мскать де і яку дитячу коляску купити.  Пропонуємо вам вашій увазі універсальну всесезонну дитячу коляску Carrello Epica 3 в 1. "
const priceCardDescriptionTwo = "CARRELLO Epica CRL - 8509 / 1 - це легка в управлінні і комфортна коляска з народження і до 3 - 4 років.Коляска чудово підійде для прогулянок і поїздок в будь - яку пору року.Дитячу коляску 2 в 1 CARRELLO Epica CRL - 8509(Каррелл Епіка) вигідно відрізняють від інших колясок 2 в 1 її легка вага і компактна рама прогулянкової коляски.Купуючи дану модель, ви купуєте дуже зручну, простору і маневрену коляску з люлькою для перенесення, яка незабаром(по досягненню дитини більше 6 місяців) перетвориться на повноцінну зручну прогулянкову коляску - книжку з великим посадковим місцем.Прогулянковий блок можна буде ставити по ходу і проти ходу руху, що дозволить возити дитину обличчям до мами максимально довго.Одинарні поворотні колеса з PU забезпечать вам комфортні прогулянки по міських вулицях і парках.Коляска дуже легко і зручно складається для транспортування або зберігання";



export default function AboutStore() {
  const [isImg, setIsImg] = useState(baby);
  const [isBtn, setIsBtn] = useState(true);
  const [isSection, setIsSection] = useState(false);
  const [isTitle, setIsTitle] = useState(homeTitle);
  const [isDescription, setIsDescription] = useState(homeDescription);
  const [isDescriptionTwo, setIsDescriptionTwo] = useState(homeDescription);

  const path = usePathname().replace("/", "");

  useEffect(() => {
    switch (path) {

      case "price-card":
        setIsImg(cardPrice);
        setIsTitle(priceCardTitle);
        setIsDescription(priceCardDescription);
        setIsDescriptionTwo(priceCardDescriptionTwo);
        setIsSection(true);
        setIsBtn(false);
        break;

      default:
        setIsImg(baby);
        setIsBtn(true);
        setIsTitle(homeTitle);
        setIsDescription(homeDescription);
        setIsSection(false);
        setIsDescriptionTwo("");
        break;
    }
  }, [path]);
  return (
    <section className={isSection ? styles.section : styles.section_home}>
      <div className={styles.container}> 
        <div className={styles.container_text}>
          <h2 className={styles.about_title}>{isTitle}</h2>
          <p className={styles.about_text} style={{marginBottom: "30px"}}>
            {isDescription}
          </p>
          <p className={styles.about_text}>{isDescriptionTwo}</p>
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