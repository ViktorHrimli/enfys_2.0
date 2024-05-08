"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import style from "./hero-cards.module.scss";

import ImgPrice from "@/assets/svg/hero-price.png";
import logo from "@/assets/svg/logo.svg";
import Line from "@/shared/line";



export default function HeroCards({ selectedCategory }) {
  const [isClient, setIsClient] = useState(false);
  const [isHeroText, setIsHeroText] = useState(selectedCategory);

  const path = usePathname().replace("/", "");

  const aksesuari = path.includes("aksesuari");
  const mebli = path.includes("mebli");
  const tekstil = path.includes("tekstil");
  const transport = path.includes("transport");
  const kilimki = path.includes("kilimki");
  const avtokrisla = path.includes("avtokrisla");
  const slingi = path.includes("slingi");


  useEffect(() => {
    switch (true) {
    
      case aksesuari:
        setIsHeroText("АКСЕСУАРИ")
        break;
      
      case mebli:
        setIsHeroText("ДИТЯЧІ МЕБЛІ")
        break;
      
      case tekstil:
        setIsHeroText("ДИТЯЧИЙ ТЕКСТИЛЬ")
        break;
      
      case transport:
        setIsHeroText("ДИТЯЧИЙ ТРАНСПОРТ")
        break;
      
      case kilimki:
        setIsHeroText("ІГРАШКИ ТА КИЛИМКИ")
        break;
      
      case avtokrisla:
        setIsHeroText("КОЛЯСКИ ТА АВТОКРІСЛА")
        break;
      
      case slingi:
        setIsHeroText("РЮКЗАКИ ТА СЛІНГИ")
        break;
    }
  }, [true]);

  useEffect(() => {
    setIsClient(true);
  }, [])

  return (
    <>
      {isClient && <section className={style.section}>
        <div className={style.container} style={{ height: "240px" }}>
          <h1 className={style.title} style={{ display: "none" }}>ENFYS</h1>
          <div className={style.hero_line_color_green}></div>
          <div className={style.hero_line_color_red}></div>
          <div className={style.hero_line_color_yellow}></div>
          <Link href="/" className={style.logo_container}>
            <Image
              src={logo}
              alt="Logo"
              priority={true}
              loading="eager"
              quality={100}
            />
          </Link>
          <p className={style.description} style={{ marginBottom: "0px" }}>{isHeroText}</p>
          <div className={style.bacground} style={{ height: "240px" }}></div>

          <div className={style.bacground_img} style={{ height: "240px" }}>
            <Image
              src={ImgPrice}
              alt="Logo"
              fill
              priority={true}
              loading="eager"
              quality={100}
              className={style.img}
            />
          </div>
        </div>
        <div style={{ position: 'absolute' }} >
          <Line />
        </div>
      </section>}
    </>
  );
}
