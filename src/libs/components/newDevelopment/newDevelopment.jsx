'use client'
import Image from "next/image";
import { useState } from "react";


import styles from './newDevelopment.module.scss'
import CardOne from '@/assets/svg/card-one.png'
import CardTwo from '@/assets/svg/card-two.png'
import Bike from '@/assets/svg/bike.png'
import Youtube from '@/assets/svg/youtube.png'
import Locomotive from '@/assets/svg/locomotive.png'


export default function NewDevelopment() {
  const [isChangeOne, setIsChangeOne] = useState(false);
  const [isChangeTwo, setIsChangeTwo] = useState(false);

  return (
    <section className={styles.section}> 
      <div className={styles.container}>
        <div style={{marginBottom: "20px"}}>
          <ul className={styles.list}>
            <li className={`${styles.link} ${styles.link_one} ${isChangeOne && styles.link_one_animation_desc}`}
              
              onMouseMove={() => setIsChangeOne(true)}
              onMouseLeave={()=> setIsChangeOne(false)}
            >
              <p className={styles.text_one}>Нові надходження</p>
              <p className={styles.text_two}>новинки 2024 року</p>
              {!isChangeOne && <div style={{ width: "378px", height: "365px" }}>
                <Image
                  src={CardOne}
                  alt="pay"
                  fill
                  priority={true}
                  loading="eager"
                  className={styles.img_card_two}
                />
              </div>}

              <button className={`${styles.btn_desc} ${isChangeOne && styles.btn_desc_animation}`}>
                {isChangeOne ? "дивитися всі" : "детальніше"}
              </button>
              <button className={styles.btn}>дивитися всі</button>

            </li>
            <li className={styles.item}>
                <Image 
                  src={CardTwo}
                  alt="pay"
                  priority={true}
                  loading="eager"
                  style={{width: "390px", height: "475px"}}
                />
            </li>

            <li className={`${styles.link} ${styles.link_two} ${isChangeTwo && styles.link_two_animation_desc}`}
              onMouseMove={()=> setIsChangeTwo(true)}
              onMouseLeave={()=> setIsChangeTwo(false)}
            >
              <button className={`${styles.btn_two_desc} ${isChangeTwo && styles.btn_two_desc_animation }`}>
                {isChangeTwo ? "дивитися всі" : "детальніше"}</button>
              
              <button className={styles.btn} style={{color: "#fff", background: "#F92D2D"}}>дивитися всі</button>
              
              <p className={`${styles.title} 
              ${isChangeTwo && styles.title_animations_desc}`}
              >хити продажів</p>

              {isChangeTwo && <p className={styles.title_after}>не пропусти</p>}

              <div className={!isChangeTwo && styles.img_animation}>
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
        <div className={styles.wow}>
          {/* <Image 
            src={Locomotive}
            alt="Locomotive"
            priority={true}
            loading="eager"
            style={{width: "820px", height: "200px"}}
          /> */}
        </div>
        <div className={styles.youtube}>
          <div className={styles.img}>
            <Image 
                  src={Locomotive}
                  alt="Locomotive"
                  priority={true}
                  loading="eager"
                  style={{width: "820px", height: "200px"}}
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