import styles from './bestSellers.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { slugify } from 'transliteration';

export default function Top({ color, dollar, bestSellers }) { 
  
  return (
    <ul className={styles.list}>
      {bestSellers.map((item, id) => {
        const ukrainianText = bestSellers[id].attributes.category;
        const path = slugify(ukrainianText);
        const ukrainianName = bestSellers[id].attributes.title;
        const name = slugify(ukrainianName);

        return(
          <li key={id} className={styles.content}>
            <Link href={`/${path}/${name}`}>
              <div className={styles.img}>
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
                <p className={styles.price} style={{ color: color }}>
                  {Math.floor(bestSellers[id].attributes.price * dollar)} ГРИВЕНЬ</p>
                <p className={styles.old_price}>
                  {Math.floor(bestSellers[id].attributes.oldPrice * dollar)} ГРИВЕНЬ</p>
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}