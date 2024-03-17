import styles from "./menu.module.scss"
import Image from "next/image";

import Nav from "@/libs/components/nav/nav";
import menuLeft from '@/assets/svg/menu-left.png'
import menuRight from '@/assets/svg/menu-right.png'

import logo from "@/assets/svg/logo.svg";


export default function Menu({ setIsMenu}) {
  return (
    <div className={styles.menu}>
      <div className={styles.menu_left}>
        <Image
          src={menuLeft}
          alt="pay"
          priority={true}
          loading="eager"
        />
      </div>
      <div className={styles.closed_menu} onClick={() => setIsMenu(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="white" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"/></svg>
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

      <div className={styles.menu_right}>
        <Image
          src={menuRight}
          alt="pay"
          priority={true}
          loading="eager"
        />
      </div>
    </div>
  )
}
