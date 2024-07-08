import styles from './newArrivals.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { slugify } from 'transliteration';

export default function New({ color, dollar, newArrivals }) { 

  return (
    <ul className={styles.list}>
      {newArrivals.map((item, id) => {
        const ukrainianText = newArrivals[id].attributes.category;
        const path = slugify(ukrainianText);
        
        const ukrainianName = item.attributes.title;
        const name = slugify(ukrainianName);

        return (
          <li key={id} className={styles.content}>
            <Link href={`/${path}/${name}`} className={styles.link}>
              <div className={styles.img}>
                
                <Image
                  src={`https://www.admin-enfys.space${item.attributes.gallery.data[0].attributes.url}`}
                  alt="image"
                  priority={true}
                  loading="eager"
                  quality={100}
                  sizes='100%'
                  width={100}
                  height={100}
                  className={styles.img}
                />
              </div>
              <h2 className={styles.title}>{item.attributes.title}</h2>
              <div className={styles.price_container}>
                <p className={styles.price} style={{ color: color }}>
                  {Math.floor(newArrivals[id].attributes.price * dollar)} ГРИВЕНЬ</p>
                <p className={styles.old_price}>
                  {Math.floor(newArrivals[id].attributes.oldPrice * dollar)} ГРИВЕНЬ</p>
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}