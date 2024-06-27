import styles from "./conditions.module.scss"
import cornerRightOrange from '@/assets/svg/corner-right-green.svg';
import cornerLeftOrange from '@/assets/svg/corner-left-green.svg';
import Image from "next/image";

export default function Conditions() { 
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.corner_left}>
          <Image
            src={cornerLeftOrange}
            alt="cornerLeft"
            priority={true}
            loading="eager"
            fill
            className={styles.img}
          />
        </div>
        <div className={styles.corner_right}>
          <Image
            src={cornerRightOrange}
            alt="cornerRight"
            priority={true}
            loading="eager"
            fill
            className={styles.img}
          />
        </div>


        <div className={styles.container_text}>
          <p>Безкоштовна доставка для замовлень від 5000 гривень</p>
        </div>
        <div className={styles.container_text}>
          <p>Всі товари сертифіковані</p>
        </div>
        <div className={styles.container_text}>
          <p>Повернення або обмін протягом 14 днів</p>
        </div>
      </div>
    </section>
  )
}