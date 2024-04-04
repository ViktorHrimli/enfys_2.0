"use client"
import { useState, useEffect } from 'react'
import styles from './price-list.module.scss'
import Filter from '@/libs/modal/filter/filter';

export default function PriceList({ }) {
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  const [isScroll, setIsScroll] = useState(
  typeof window !== "undefined" ? window.scrollY : 0
  );

  console.log(isScroll);

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

          <div className={styles.content} >
          Коляска універсальна CARRELLO Epica CRL-8511 (3в1) Almond Beige (Каррелло Епіка)
          </div>
        </div>
      </section>
      {isOpenFilter && <Filter setIsOpenFilter={setIsOpenFilter} />}
    </>
  )
}