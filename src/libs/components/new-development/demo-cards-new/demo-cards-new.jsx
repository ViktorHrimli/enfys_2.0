import styles from './demo-cards-new.module.scss';
import Image from 'next/image';
import Link from 'next/link';


import img from '@/assets/svg/card-demo.png';
import img2 from '@/assets/svg/bike.png';

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
];


export default function New({color}) { 
  return (
    <ul className={styles.list}>
      {card.map(({ img, title, price, oldPrice }, id) => (
              <li key={id} className={styles.content}>
                {/* <Link href="/price/34"> */}
                <div className={styles.img}>
                  <Image 
                    src={img}
                    alt="image"
                    priority={true}
                    loading="eager"
                    quality={100}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h2 className={styles.title}>{title}</h2>
                  <div className={styles.price_container}>
                    <p className={styles.price} style={{color: color}}>{price} ГРИВЕНЬ</p>
                    <p className={styles.old_price}>{oldPrice} ГРИВЕНЬ</p>
                  </div>
                {/* </Link> */}
              </li>
            ))}
    </ul>
  )
}