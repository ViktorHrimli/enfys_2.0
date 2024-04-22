"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './price-list.module.scss';
import Filter from '@/libs/modal/filter/filter';

import Link from 'next/link';
import AboutCards from '../about-cards-gallary/about-cards-gallary';



export default function PriceList({data}) {
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
            {data.map((item, id) => (
              <li key={id} className={styles.content}>
                <Link className={styles.link} href={`price/${id}`}>
                <div className={styles.img}>
                  <Image 
                    src={`https://www.admin-enfys.space${item.attributes.gallery.data[0].attributes.url}` }
                    alt="image"
                    priority={true}
                    loading="eager"
                    fill
                    quality={100}
                  />
                </div>
                <h2 className={styles.title}>{item.attributes.title}</h2>
                  <div className={styles.price_container}>
                    <p className={styles.price}>{item.attributes.price} ГРИВЕНЬ</p>
                    <p className={styles.old_price}>{item.attributes.oldPrice} ГРИВЕНЬ</p>
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