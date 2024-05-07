'use client'
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";


import styles from "./form-section.module.scss";
import cornerLeft from '@/assets/svg/about-left.svg';
import cornerRight from '@/assets/svg/about-right.svg';

import Form from "@/libs/components/form/form"
import Reviews from "@/libs/pages/components/reviews/reviews";
import ThenkYou from "@/libs/modal/thank-you/thank-you";

export default function FormSection() {
  const [isContent, setIsContent] = useState(false);
  const [isTitle, setIsTitle] = useState(true);
  const [isThenkyou, setIsThenkyou] = useState(false);
  const [isScroll, setIsScroll] = useState(
    typeof window !== "undefined" ? window.scrollY : 0
  );

  const path = usePathname().replace("/", "");

  useEffect(() => {
    switch (path) {
    
      case "reviews":
        setIsTitle(false);
        setIsContent(true);
        break;
      
      default:
        setIsTitle(true);
        setIsContent(false);
        break;
    }
  }, [path]);


  useEffect(() => {
    if (isThenkyou) {
      setIsScroll(window.scrollY);

      document.body.style.overflow = "hidden";
      document.body.style.maxHeight = "100vh";
    }
    
    window.scrollTo(0, isScroll);

    return () => {
      document.body.style.overflowX = "hidden";
      document.body.style.maxHeight = "";
    };
  }, [isThenkyou]);


  return (
    <>
      <section className={styles.section}>
        <div className={styles.corner_left}>
        <Image
          src={cornerLeft}
          alt="pay"
          priority={true}
          loading="eager"
          quality={100}
        />
      </div>
        <div className={styles.container}>
          {isTitle &&
          <h2 className={styles.title}>Будь ласка заповните форму
            <span className={styles.after}>і ми з вами зв’яжемося</span>
          </h2>
          }
            {isContent ?
              <Reviews />
              :
              <Form setIsThenkyou={setIsThenkyou} />
            }
        </div>
        <div className={styles.corner_right} >
          <Image
            src={cornerRight}
            alt="pay"
            priority={true}
            loading="eager"
            quality={100}
          />
      </div>
      </section>
      {isThenkyou && <ThenkYou setIsThenkyou={setIsThenkyou}/>}
    </>
  )
}