"use client"
import styles from "./about-store.module.scss"
import Image from "next/image"

import baby from "@/assets/svg/baby.png"

export default function AboutStore() {
  return (
    <section className={styles.section}>
      <div className={styles.container}> 
        <div className={styles.container_text}>
          <h2 className={styles.about_title}>Наш магазин, за фактом, це marketplace, де будь-який покупець зможе вибрати все, що йому потрібно.</h2>
          <p className={styles.about_text}>
            При цьому кожна продукція має сертифіковану якість. І тепер немає необхідності відвідувати різноманітні традиційні магазини, витрачати час на черги і поїздку до потрібного місця, адже користуючись нашими послугами, Ви зможете придбати товар, не виходячи з дому. Будучи, наприклад, на обіді, в транспорті, в відрядженні - в будь-який час і незалежно від свого місцезнаходження оглянути наш електронний каталог, вибрати цікавить і здійснити замовлення. А так як інтернет-магазинах немає потреби в оренді торговельного майданчика, а також в утриманні великого штату співробітників-продавців, ми продаємо вироби з найбільш оптимальною і демократичною вартістю. Тому покупку товару у нас зможе дозволити собі кожен без навантаження на свій бюджет і фінанси.
          </p>
        </div>
          <div className={styles.container_btn}>
            <div className={styles.image_container}>
              <Image 
                src={baby}
                alt="Image"
                priority={true}
                loading="eager"
                quality={100}
                className={styles.img}
              />
            </div>
            <button className={styles.btn}>ВІДГУКИ</button>
          </div>
      </div>
    </section>
  )
}