'use client'
import Image from "next/image";


import left from '@/assets/svg/about-left.png'
import right from '@/assets/svg/about-right.png'

import styles from "./form-section.module.scss";
import Form from "@/libs/components/form/form"

export default function FormSection() {
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
        <h2 className={styles.title}>Будь ласка заповните форму
          <span className={styles.after}>і ми з вами зв’яжемося</span>
        </h2>
        <div>
          <Form />
        </div>
      </div>
    </section>
  )
}