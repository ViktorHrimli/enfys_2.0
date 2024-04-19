"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './price-list.module.scss';
import Filter from '@/libs/modal/filter/filter';
import img from '@/assets/svg/card-demo.png';
import img2 from '@/assets/svg/bike.png';
import Link from 'next/link';


const card = [
  {
    img: img,
    title: "Коляска універсальна CARRELLO Epica CRL-8511 (3в1) Almond Beige (Каррелло Епіка)",
    price: "17 213",
    oldPrice: "18665"
  },
  {
    img: img2,
    title: "Коляска універсальна CARRELLO Epica CRL-8511 (3в1) Almond Beige (Каррелло Епіка)",
    price: "17 213",
    oldPrice: "18665"
  },
  {
    img: img,
    title: "Cтілець для годування CARRELLO Indigo CRL-8402 Graphite Black (Карело Індіго)",
    price: "4205",
    oldPrice: "4716"
  },
  {
    img: img,
    title: "Коляска універсальна CARRELLO Epica CRL-8511 (3в1) Almond Beige (Каррелло Епіка)",
    price: "17 213",
    oldPrice: "18665"
  },
  {
    img: img,
    title: "Коляска універсальна CARRELLO Epica CRL-8511 (3в1) Almond Beige (Каррелло Епіка)",
    price: "17 213",
    oldPrice: "18665"
  }
];

export default function PriceList({ }) {
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [isOnBtn, setIsOnBtn] = useState(false);


  const [isScroll, setIsScroll] = useState(
  typeof window !== "undefined" ? window.scrollY : 0
  );

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
          
          <button className={styles.btn}
            onClick={() => setIsOpenFilter(true)}>ФІЛЬТРИ
          </button>

          <ul className={styles.card_container}>
            {card.map(({ img, title, price, oldPrice }, id) => (
              <li key={id} className={styles.content}>
                <Link className={styles.link} href="/price/34">
                <div className={styles.img}>
                  <Image 
                    src={img}
                    alt="image"
                    priority={true}
                    loading="eager"
                    quality={100}
                  />
                </div>
                <h2 className={styles.title}>{title}</h2>
                  <div className={styles.price_container}>
                    <p className={styles.price}>{price} ГРИВЕНЬ</p>
                    <p className={styles.old_price}>{oldPrice} ГРИВЕНЬ</p>
                  </div>
                </Link>
                <button className={styles.btn_card} >купити</button>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {isOpenFilter && <Filter setIsOpenFilter={setIsOpenFilter} />}
    </>
  )
}