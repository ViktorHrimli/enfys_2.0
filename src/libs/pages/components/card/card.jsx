import styles from "./card.module.scss"
import Image from "next/image"

// -------- demo --------------------------\
import imgCards from "../about-cards-gallary/img/img-1.png";
// ----------------------------------------/

export default function Card() {
  return (
    <section className={styles.section}>
      <div className={styles.box}>
        <div className={styles.left_box}>
          <div className={styles.left_green}></div>
          <div className={styles.left_orange}></div>
          <div className={styles.left_red}></div>
        </div>
        
        <div className={styles.right_box}>
          <div className={styles.right_red}></div>
          <div className={styles.right_yello}></div>
          <div className={styles.right_green}></div>
          <div className={styles.right_yello_bottom}></div>
        </div>
      </div>
    </section>
  )
}