import styles from "./Footer.module.scss"

import Image from "next/image";
// import Link from "next/link";

import Line from '@/shared/line'
import logo from "@/assets/svg/logo.svg";


export default function Footer() {
  return (
    <section className={styles.section}>
      <div style={{position: "absolute", top: "0"}}>
          <Line />
        </div>
      <div className={styles.container}>
        <div className={styles.container_img}>
          <Image 
            src={logo}
            alt="Logo"
            priority={true}
            loading="eager"
            quality={100}
            className={styles.img}
          />
        </div>
      </div>
    </section>
  )
}
