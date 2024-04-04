"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import style from "./Hero.module.scss";

import Img from "@/assets/svg/hero.png";
import ImgAbout from "@/assets/svg/hero-about.png";
import ImgContacts from "@/assets/svg/hero-contacts.png";
import ImgReviews from "@/assets/svg/reviews-hero.png";
import ImgPrice from "@/assets/svg/hero-price.png";


import logo from "@/assets/svg/logo.svg";

import Line from "@/shared/line";

const homeText = "НАСОЛОДЖУЙСЯ МАТЕРИНСТВОМ з ENFyS";
const aboutText = "ENFyS - це ідеальне поєднання ціни та якості";
const contactsText = "зв’яжіться з нами - з радістю доможемо";
const reviewsText = "відгуки про магазин";
const priceText = "прогулянкові візочки";


export default function Hero() {
  const [isHero, setIsHero] = useState(Img);
  const [isHeroText, setIsHeroText] = useState(homeText);


  const path = usePathname().replace("/", "");

  useEffect(() => {
    switch (path) {
    
      case "about":
        setIsHero(ImgAbout);
        setIsHeroText(aboutText)
        break;
      
      case "contacts":
        setIsHero(ImgContacts);
        setIsHeroText(contactsText)
        break;
      
      case "reviews":
        setIsHero(ImgReviews);
        setIsHeroText(reviewsText)
        break;
      
      case "price":
        setIsHero(ImgPrice);
        setIsHeroText(priceText)
        break;
      
      default:
        setIsHero(Img);
        setIsHeroText(homeText)
        break;
    }
  }, [path]);

  return (
    <>
      <section className={style.section}>
        <div className={style.container} style={path === "price" ? {height: "240px"} : {height: "100vh"}}>
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
          <p className={style.description} style={path === "price" ? {marginBottom: "0px"} : {}}>{isHeroText}</p>
        <div className={style.bacground} style={path === "price" ? {height: "240px"} : {height: "100vh"}}></div>

        <div className={style.bacground_img} style={path === "price" ? {height: "240px"} : {height: "100vh"}}>
          <Image 
            src={isHero}
            alt="Logo"
            fill
            priority={true}
            loading="eager"
            quality={100}
            className={style.img}
          />
          </div>
        </div>
        <div style={{position: 'absolute'}} > 
          <Line />
        </div>
      </section>
    </>
  );
}
