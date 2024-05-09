'use client'
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";


import styles from './new-development.module.scss'
import CardOne from '@/assets/svg/card-one.png'
import CardTwo from '@/assets/svg/card-two.png'
import Bike from '@/assets/svg/bike.png'
import WowBack from '@/assets/svg/wow-background.png'
import WowBackTel from '@/assets/svg/wow-img-mob.png'
import Youtube from '@/assets/svg/youtube.png'
import Locomotive from '@/assets/svg/locomotive.png'
import New from "./newArrivals/newArrivals";
import Top from "./bestSellers/bestSellers";



export default function NewDevelopment({dollar, newArrivals, bestSellers}) {
  const [isChangeOne, setIsChangeOne] = useState(false);
  const [isChangeTwo, setIsChangeTwo] = useState(false);

  return (
    <section className={styles.section}> 
      <div className={styles.container}>
        <div style={{marginBottom: "20px"}}>
          <ul className={styles.list}>
            <li className={styles.tab_none}>
              <div className={styles.img_card_centr}>
                <Image 
                  src={CardTwo}
                  alt="pay"
                  priority={true}
                  loading="eager"
                  className={styles.img_centr}
                />
              </div>
            </li>
            <li className={`${styles.link} ${styles.link_one} ${isChangeOne && styles.link_one_animation_desc}`}
              onMouseMove={() => setIsChangeOne(true)}
              onMouseLeave={()=> setIsChangeOne(false)}
            >
              
              <p className={styles.text_one}>Нові надходження</p>
              <p className={styles.text_two}>новинки 2024 року</p>
              {isChangeOne && <div className={styles.gallery_left}>
                <New color={"#FF8A00"} newArrivals={newArrivals} dollar={dollar} />
              </div>}
              <div className={styles.gallery_left_tel}>
                <New color={"#FF8A00"} newArrivals={newArrivals} dollar={dollar} />
              </div>
              {!isChangeOne && <div style={{position: "absolute", width: "378px", height: "365px" }}>
                <Image
                  src={CardOne}
                  alt="pay"
                  fill
                  priority={true}
                  loading="eager"
                  className={styles.img_card_two}
                />
              </div>}

              <Link href={"novi-nadhodzhennya"} className={`${styles.btn_desc} ${isChangeOne && styles.btn_desc_animation}`}>
                {isChangeOne ? "дивитися всі" : "детальніше"}
              </Link>
              <Link href={"novi-nadhodzhennya"} className={styles.btn}>дивитися всі</Link>

            </li>
            <li className={`${styles.link} ${styles.link_two} ${isChangeTwo && styles.link_two_animation_desc}`}
              onMouseMove={()=> setIsChangeTwo(true)}
              onMouseLeave={()=> setIsChangeTwo(false)}
            >
              
              <Link href={"hiti-prodazhiv"} className={`${styles.btn_two_desc} ${isChangeTwo && styles.btn_two_desc_animation }`}>
                {isChangeTwo ? "дивитися всі" : "детальніше"}
              </Link>
              
              <Link className={styles.btn} href={"hiti-prodazhiv"} style={{color: "#fff", background: "#F92D2D"}}>дивитися всі</Link>
              
              <p className={`${styles.title} 
              ${isChangeTwo && styles.title_animations_desc}`}
              >хіти продажів</p>

              {isChangeTwo && <p className={styles.title_after}>не пропусти</p>}
              {isChangeTwo && <div className={styles.gallery_right}>
                <Top color={"#F92D2D"} bestSellers={bestSellers} dollar={dollar}/>
              </div>}
              <div className={styles.gallery_right_tel}>
                <Top color={"#F92D2D"} bestSellers={bestSellers} dollar={dollar}/>
              </div>
              <div className={isChangeTwo ? styles.display_none : styles.img_animation}>
                <Image
                  src={Bike}
                  alt="Bike"
                  fill
                  priority={true}
                  loading="eager"
                  className={styles.img_bike}
                />
              </div>
            </li>
          </ul>
        </div>
        {/* wow */}
        <div className={styles.wow}>
          <h2 className={styles.wow_title_container}>
            <span className={styles.wow_title}>wow<span>wow</span></span>
            <span className={styles.wow_title_text}>це все про нас <span>це все про нас</span></span>
          </h2>
          <div className={styles.wow_descriptions_container}>
            <div className={styles.wow_descriptions_items}>
              <h3>ОПЛАТА ПРИ ОТРИМАННІ</h3>
              <p>Ви можете оплатити замовлення готівкою при отриманні</p>
            </div>
            <div className={styles.wow_descriptions_items}>
              <h3>ШВИДКА ДОСТАВКА</h3>
              <p>Доставляємо всі товари в будь-яку точку України</p>
            </div>
            <div className={styles.wow_descriptions_items}>
              <h3>СЕРТИФІКАЦІЯ</h3>
              <p>Тільки якісні сертифіковані товари</p>
            </div>
            <div className={styles.wow_descriptions_items}>
              <h3>ПОКУПКА В ОДИН КЛІК</h3>
              <p>А також оформлення Оплати частинами ти Покупки частинами прямо на сайті</p>
            </div>
          </div>
          <Image 
            src={WowBack}
            alt="wow"
            priority={true}
            loading="eager"
            className={styles.wow_img_desc}
          />
          <Image 
            src={WowBackTel}
            alt="wow"
            priority={true}
            loading="eager"
            className={styles.wow_img_mob}
          />
        </div>
        {/* youtube */}
        <div className={styles.youtube}>
          <div className={styles.img}>
            <Image 
              src={Locomotive}
              alt="Locomotive"
              priority={true}
              loading="eager"
              style={{width: "100%", height: "200px"}}
            />
          </div>
          <div className={styles.video} >
            <p className={styles.video_text}>свіжі відеоогляди</p>
            <button className={styles.video_btn}>дивитися</button>
            <div style={{position: "absolute", top: "0", right: "0"}}>
              <Image 
                  src={Youtube}
                  alt="pay"
                  priority={true}
                  loading="eager"
                  style={{ width: "196px", height: "200px" }}
                  quality={100}
                />
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}