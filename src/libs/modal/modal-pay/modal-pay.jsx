"use client";
import styles from "./modal-pay.module.scss";
import Link from "next/link";
import Item from "./item/item";
import Image from 'next/image';
import { useState, useEffect } from "react";

import cornerRightOrange from '@/assets/svg/corner-right-green.svg';
import cornerLeftOrange from '@/assets/svg/corner-left-green.svg';
import starsLeft from '@/assets/svg/stars-left.svg';
import starsRight from '@/assets/svg/stars-right.svg';


export default function PayModal({ setIsPay, storedItems, setStoredItems }) {
  const [isTotalPrice, setIsTotalPrice] = useState(null);

  function closed() {
    setIsPay(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
      <div className={styles.corner_left}>
          <Image
            src={cornerLeftOrange}
            alt="pay"
            priority={true}
            loading="eager"
          />
        </div>
        <div className={styles.corner_right}>
          <Image
            src={cornerRightOrange}
            alt="pay"
            priority={true}
            loading="eager"
          />
        </div>
        <div className={styles.stars_left}>
          <Image
            src={starsLeft}
            alt="stars"
            priority={true}
            loading="eager"
          />
        </div>
        <div className={styles.stars_right}>
          <Image
            src={starsRight}
            alt="stars"
            priority={true}
            loading="eager"
          />
        </div>
        <div className={styles.closed} onClick={() => setIsPay(false)}>
          <svg className={styles.closed_svg}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"
            />
          </svg>
        </div>
        <h2 className={styles.title}>корзина</h2>
        <div className={styles.list}>
          <div className={styles.item_description}>
            <p className={styles.item_text}>Кількість</p>
            <p className={styles.item_text}>Сума</p>
          </div>
          <ul>
            {storedItems.map(
              ({ ImageCards, TitleCards, PriceCards, QuantityCards }, id) => {
                return (
                  <li key={id} className={styles.item}>
                    <Item
                      id={id}
                      storedItems={storedItems}
                      setStoredItems={setStoredItems}
                      ImageCards={ImageCards}
                      TitleCards={TitleCards}
                      PriceCards={PriceCards}
                      QuantityCards={QuantityCards}
                      setIsTotalPrice={setIsTotalPrice}
                    />
                  </li>
                );
              }
            )}
          </ul>
        </div>
        <div className={styles.result}>
          <p className={styles.text}>Підсумок</p>
          <p className={styles.text}>{isTotalPrice} гривень</p>
        </div>
        <Link
          href="/oformlennya-zamovlennya"
          className={styles.btn}
          onClick={closed}
        >
          оформити замовлення
        </Link>
      </div>
    </div>
  );
}
