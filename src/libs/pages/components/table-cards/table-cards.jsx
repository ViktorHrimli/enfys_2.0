"use client"
import styles from './table-cards.module.scss'
import cornerRightOrange from '@/assets/svg/corner-right-green.svg';
import cornerLeftOrange from '@/assets/svg/corner-left-green.svg';
import Image from "next/image";

export default function TableCards({ data }) {
  const keyId = 0;
  const tableList = data[keyId].attributes.table;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
      <div className={styles.corner_left}>
          <Image
            src={cornerLeftOrange}
            alt="cornerLeft"
            priority={true}
            loading="eager"
          />
        </div>
        <div className={styles.corner_right}>
          <Image
            src={cornerRightOrange}
            alt="cornerRight"
            priority={true}
            loading="eager"
          />
        </div>
        <h2 className={styles.title}>Характеристики: {data[keyId].attributes.title}</h2>
        <ul className={styles.list}>
          {tableList.map(({ title, value }, id) => (
              <li key={id} className={styles.item}>
                <div className={styles.text}>
                  <p>{title}</p>
                </div>
                <div className={styles.value}>
                  <p>{value}</p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </section>
  )
}