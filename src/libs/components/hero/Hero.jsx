import Image from "next/image";

import style from "./Hero.module.scss";

import Img from "@/assets/svg/hero.png";
import logo from "@/assets/svg/logo.svg";

import Line from "@/shared/line";


export default function Hero() {
  return (
    <>
      <section className={style.section}>
        <div className={style.container}>
          <h1 className={style.title} style={{ display: "none" }}>ENFYS</h1>
          <div className={style.hero_line_color_green}></div>
          <div className={style.hero_line_color_red}></div>
          <div className={style.hero_line_color_yellow}></div>
          <div style={{position: "relative", zIndex: "3"}}>
            <Image 
            src={logo}
            alt="Logo"
            priority={true}
            loading="eager"
            quality={100}
            className={style.logo}
          />
          </div>
          <p className={style.description}>НАСОЛОДЖУЙСЯ МАТЕРИНСТВОМ з ENFyS</p>
        <div className={style.bacground}></div>

        <div className={style.bacground_img}>
          <Image 
            src={Img}
            alt="Logo"
            fill
            priority={true}
            loading="eager"
            quality={100 }
            className={style.img}
          />
          </div>
        </div>
        <div style={{position: 'absolute'}}> 
          <Line />
        </div>
      </section>
    </>
  );
}
