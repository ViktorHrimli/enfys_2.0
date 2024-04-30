import styles from "./card.module.scss"
import Image from "next/image"


import imgCardsOne from "./img/one.png";
import imgCardsTwo from "./img/two.png";
import imgCardsThree from "./img/three.png";
import imgCardsFoo from "./img/foo.png";
import imgCardsFiwe from "./img/fiwe.png";
import imgCardsSix from "./img/six.png";
import imgCardsSeven from "./img/seven.png";


export default function Card() {
  return (
    <section className={styles.section}>
      <div className={styles.box}>
        <div className={styles.left_box}>
          <div className={styles.left_green}>
            <Image 
              src={imgCardsOne}
              alt="image"
              priority={true}
              loading="eager"
              quality={100}
            />
            <div className={styles.left_text_green}>
              <p className={styles.p} >Зручна, маневреная та практична коляска з міцною  легкою рамою</p>
            </div>
          </div>

          <div className={styles.left_orange}>
            <Image 
              src={imgCardsThree}
              alt="image"
              priority={true}
              loading="eager"
              quality={100}
            />
            <div className={styles.left_text_orange}>
              <p className={styles.p} >Передні поворотні колеса з фіксацією та амортизацією. </p>
            </div>
          </div>
          <div className={styles.left_red}>
              <Image 
                src={imgCardsSix}
                alt="image"
                priority={true}
                loading="eager"
                quality={100}
              />
            <div className={styles.left_text_red}>
              <p className={styles.p} >Внутрішня оббивка люльки знімна, виконана з бавовни, приємна на дотик, володіє воздухороникністю і швидко сохне.  У комплекті матрацик для малюка.</p>
            </div>
          </div>
        </div>
        
        <div className={styles.right_box}>
          <div className={styles.right_red}>
            <Image 
              src={imgCardsTwo}
              alt="image"
              priority={true}
              loading="eager"
              quality={100}
            />
            <div className={styles.right_text_red}>
              <p className={styles.p} >Поворотний блок з можливістю установки обличчям до мами і від мами.</p>
            </div>
          </div>
          <div className={styles.right_yello}>
            <Image 
              src={imgCardsFoo}
              alt="image"
              priority={true}
              loading="eager"
              quality={100}
            />
            <div className={styles.right_text_yello}>
              <p className={styles.p} >Удобная автолюлька-переноска с регулируемым подголовником.</p>
            </div>
          </div>
          <div className={styles.right_green}>
            <Image 
              src={imgCardsFiwe}
              alt="image"
              priority={true}
              loading="eager"
              quality={100}
            />
            <div className={styles.right_text_green}>
              <p className={styles.p}>Задні колеса великого діаметру та амортизацією для плавного руху. </p>
            </div>
          </div>
          <div className={styles.right_yello_bottom}>
            <Image 
              src={imgCardsSeven}
              alt="image"
              priority={true}
              loading="eager"
              quality={100}
            />
            <div className={styles.right_text_yello_bottom }>
              <p className={styles.p}>Простора непродувна люлька з ручкою для переноски, віконцем для вентиляції та надійним кріпленням. </p>
            </div>
          </div>
          <div className={styles.text_container}>
            <p>Коляска доступна в трьох комплектаціях:</p>
            <p>1. Прогулянковий варіант</p>
            <p>2. Універсальна Epica 2в1</p> 
            <p>3. Універсальна Epica 3в1</p>
          </div>
        </div>
      </div>
    </section>
  )
}