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
            <li className={`${styles.link} ${styles.link_one}`}
              style={isChangeOne ? { position: "absolute", width: "100%", zIndex: "3" } : {}}
              onMouseMove={()=> setIsChangeOne(true)}
              onMouseLeave={()=> setIsChangeOne(false)}
            >
              <p className={styles.text_one}>Нові надходження</p>
              <p className={styles.text_two}>новинки 2024 року</p>
              {!isChangeOne && <div style={{ width: "378px", height: "365px" }}>
                <Image
                  src={CardOne}
                  alt="pay"
                  style={{ marginLeft: "84px" }}
                  priority={true}
                  loading="eager"
                />
              </div>}
              <button className={styles.btn}
                style={isChangeOne ? { rotate: "-90deg", transition: "0.5s", left: "-96px", bottom: "184px" } : {transition: "0.5s"}}
              >
                {isChangeOne ? "дивитися всі" : "детальніше"}</button>
            </li>
            <li className={styles.link} >
                <Image 
                  src={CardTwo}
                  alt="pay"
                  priority={true}
                  loading="eager"
                  style={{width: "390px", height: "475px"}}
                />
            </li>
            <li className={`${styles.link} ${styles.link_two}`}
              style={isChangeTwo ? { position: "absolute", width: "100%", zIndex: "3" } : {}}
              onMouseMove={()=> setIsChangeTwo(true)}
              onMouseLeave={()=> setIsChangeTwo(false)}
            >
              <button className={`${styles.btn_two}`}
                style={isChangeTwo ? { rotate: "-90deg", transition: "0.5s", right: "-94px", top: "230px" } : {transition: "0.5s"}}
                
              >
                {isChangeTwo ? "дивитися всі" : "детальніше"}</button>

              <p className={styles.title}
                style={isChangeTwo ? { rotate: "90deg", transition: "0.5s", position: "absolute", right: "-70px", top: "18px", fontSize: "24px" } : {transition: "0.5s"}}
              >хити продажів</p>
              {isChangeTwo && <p className={styles.title_after}>не пропусти</p>}

              {!isChangeTwo && <div style={{ position: "absolute", left: "43px", top: "182px" }}>
                <Image
                  src={Bike}
                  alt="Bike"
                  priority={true}
                  loading="eager"
                  style={{ width: "332px", height: "315px" }}
                />
              </div>}
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