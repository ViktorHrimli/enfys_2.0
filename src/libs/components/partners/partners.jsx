"use client"
import Image from "next/image";

import styles from './partners.module.scss';

import babybreeze from '@/assets/svg/partners/babybreeze-logo.png';
import babyzz from '@/assets/svg/partners/babyzz-logo.png';
import benebaby from '@/assets/svg/partners/benebaby-logo.png';
import bugs from '@/assets/svg/partners/bugs.png';
import carrello from '@/assets/svg/partners/carrello.png';

const initialPartners = [
  { img: babybreeze },
  { img: babyzz },
  { img: benebaby },
  { img: bugs },
  { img: carrello },
  { img: babybreeze },
  { img: babyzz },
  { img: benebaby },
  { img: bugs },
  { img: carrello },
  { img: babybreeze },
  { img: babyzz },
  { img: benebaby },
  { img: bugs },
  { img: carrello },
  { img: babybreeze },
  { img: babyzz },
  { img: benebaby },
  { img: bugs },
  { img: carrello },
  { img: babybreeze },
  { img: babyzz },
  { img: benebaby },
  { img: bugs },
  { img: carrello },
  { img: babybreeze },
  { img: babyzz },
  { img: benebaby },
  { img: bugs },
  { img: carrello },
  { img: babybreeze },
  { img: babyzz },
  { img: benebaby },
  { img: bugs },
  { img: carrello },
  { img: babybreeze },
  { img: babyzz },
  { img: benebaby },
  { img: bugs },
  { img: carrello },
  { img: babybreeze },
  { img: babyzz },
  { img: benebaby },
  { img: bugs },
  { img: carrello },
  { img: babybreeze },
  { img: babyzz },
  { img: benebaby },
  { img: bugs },
  { img: carrello },
  { img: babybreeze },
  { img: babyzz },
  { img: benebaby },
  { img: bugs },
  { img: carrello },
];

const Partners = () => {

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <ul className={styles.list}>
          {initialPartners.map((item, id) => (
            <li key={id} className={styles.item}>
              <Image 
                src={item.img}
                alt="Logo"
                fill
                priority={true}
                loading="eager"
                quality={100}
              />
          </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Partners;
