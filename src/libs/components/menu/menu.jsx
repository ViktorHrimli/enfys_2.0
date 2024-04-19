import styles from "./menu.module.scss"
import Image from "next/image";

import Nav from "@/libs/components/nav/nav";
import menuLeft from '@/assets/svg/menu-left.png';
import menuRight from '@/assets/svg/menu-right.png';
import closed from '@/assets/svg/closed.svg';


import logo from "@/assets/svg/logo.svg";


export default function Menu({ setIsMenu}) {
  return (
    <div className={styles.menu}>
      {/* <div className={styles.menu_left}>
        <Image
          src={menuLeft}
          alt="pay"
          priority={true}
          loading="eager"
        />
      </div> */}
      <div className={styles.closed_menu} onClick={() => setIsMenu(false)}>
        <Image
          src={closed}
          alt="pay"
          priority={true}
          loading="eager"
        />
      </div>

      <Nav setIsMenu={ setIsMenu } />
      <div className={styles.logo}>
        <Image
          src={logo}
          alt="pay"
          priority={true}
          loading="eager"
        />
      </div>
{/* 
      <div className={styles.menu_right}>
        <Image
          src={menuRight}
          alt="pay"
          priority={true}
          loading="eager"
        />
      </div> */}
    </div>
  )
}
