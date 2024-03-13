'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";


import left from '@/assets/svg/about-left.png'
import right from '@/assets/svg/about-right.png'

import styles from "./form-section.module.scss";
import Form from "@/libs/components/form/form"
import Reviews from "@/libs/pages/components/reviews/reviews";

export default function FormSection() {
  const [isContent, setIsContent] = useState(false);
  const [isTitle, setIsTitle] = useState(true);

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

  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <Image 
            src={left}
            alt="Logo"
            priority={true}
            loading="eager"
          />
      </div>
      <div className={styles.right}>
        <Image 
          src={right}
          alt="Logo"
          priority={true}
          loading="eager"
        />
      </div>
      <div className={styles.container}>
        {isTitle &&
        <h2 className={styles.title}>Будь ласка заповните форму
          <span className={styles.after}>і ми з вами зв’яжемося</span>
        </h2>
        }
        <div>
          {isContent ?
            <Reviews />
            :
            <Form />
          }
        </div>
      </div>
    </section>
  )
}