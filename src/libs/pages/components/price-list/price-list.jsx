"use client"
import Image from 'next/image';
import Link from 'next/link';


import { useState, useEffect } from 'react';
import { usePathname } from "next/navigation";

import styles from './price-list.module.scss';
import Filter from '@/libs/modal/filter/filter';

import PartnersIcon from '@/shared/icons/partners';
import { slugify } from 'transliteration';



export default function PriceList({ data, dollar }) {
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  const [isScroll, setIsScroll] = useState(
  typeof window !== "undefined" ? window.scrollY : 0
  );


  const path = usePathname().replace("/", "");

  useEffect(() => {
    if (isOpenFilter) {
      setIsScroll(window.scrollY);

      document.body.style.overflow = "hidden";
      document.body.style.maxHeight = "100vh";
    }
    
    window.scrollTo(0, isScroll);

    return () => {
      document.body.style.overflowX = "hidden";
      document.body.style.maxHeight = "";
    };
  }, [isOpenFilter]);


  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}> 
          
          <button className={styles.btn} onClick={() => setIsOpenFilter(true)}>ФІЛЬТРИ</button>

          <ul className={styles.card_container}>
            {data.map((item, id) => {
              // const ukrainianName = data[id].attributes.title;
              // const name = slugify(ukrainianName);
              return (
                <li key={id} className={styles.content}>
                  <Link className={styles.link} href={`/${path}/${id}`}>
                    <div className={styles.partners_icon}>
                      <PartnersIcon />
                    </div>
                    <div className={styles.img_container}>
                      <Image
                        src={`https://www.admin-enfys.space${item.attributes.gallery.data[0].attributes.url}`}
                        alt="image"
                        priority={true}
                        loading="eager"
                        fill
                        sizes='100%'
                        quality={100}
                        className={styles.img}
                      />
                    </div>
                    <h2 className={styles.title}>{item.attributes.title}</h2>
                    <div className={styles.price_container}>
                      {data[id].attributes.inStock === "в наявності"
                        ?
                        <p className={styles.price}>
                          {Math.floor(data[id].attributes.price * dollar)} ГРИВЕНЬ
                          <span className={styles.old_price}>{Math.floor(data[id].attributes.oldPrice * dollar)} ГРИВЕНЬ</span>
                        </p>
                        :
                        data[id].attributes.inStock === "очікуємо" ?
                          <p className={styles.price}>{data[id].attributes.inStock}</p>
                          :
                          <p className={styles.price}>{data[id].attributes.inStock}</p>
                      }
                    </div>
                  </Link>
                  <button className={styles.btn_card}>купити</button>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
      {isOpenFilter && <Filter setIsOpenFilter={setIsOpenFilter} />}
    </>
  )
}