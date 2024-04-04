import styles from "./card.module.scss"
import Image from "next/image"

// -------- demo --------------------------\
import imgCards from "../about-cards-gallary/img/img-1.png"; // |
// ----------------------------------------/

export default function Card() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.relative}>
          <Image 
            src={imgCards} // demo : "imgCards"
            alt="item"
            priority={true}
            loading="eager"
            quality={100}
            style={{objectFit: "cover"}}
          />
        </div>
      </div>
    </section>
  )
}