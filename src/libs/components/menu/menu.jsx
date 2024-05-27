import styles from "./menu.module.scss"
import Image from "next/image";

import Nav from "@/libs/components/nav/nav";
import closed from '@/assets/svg/closed.svg';
import cornerLeft from '@/assets/svg/about-left.svg';
import cornerLeftMob from '@/assets/svg/corner-left-mob.svg';

import cornerRight from '@/assets/svg/about-right.svg';
import cornerRightMob from '@/assets/svg/corner-right-mob.svg';

import logo from "@/assets/svg/logo.svg";


export default function Menu({ setIsMenu, setIsPay}) {
  return (
    <div className={styles.menu}>
      <div className={styles.corner_left_mob}>
        <Image
          src={cornerLeftMob}
          alt="pay"
          priority={true}
          loading="eager"
          quality={100}
        />
      </div>
      <div className={styles.corner_left}>
        <Image
          src={cornerLeft}
          alt="pay"
          priority={true}
          loading="eager"
          quality={100}
        />
      </div>

      <div className={styles.closed_menu} onClick={() => setIsMenu(false)}>
        <Image
          src={closed}
          alt="pay"
          priority={true}
          loading="eager"
        />
      </div>

      <Nav setIsMenu={setIsMenu} setIsPay={setIsPay} />
      
      <div className={styles.logo}>
        <Image
          src={logo}
          alt="pay"
          priority={true}
          loading="eager"
        />
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
      <div className={styles.corner_right_mob} >
        <Image
          src={cornerRightMob}
          alt="pay"
          priority={true}
          loading="eager"
          quality={100}
        />
      </div>
    </div>
  )
}
