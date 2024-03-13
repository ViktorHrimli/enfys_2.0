"use client"
import styles from "./reviews.module.scss"
import {reviews} from "@/shared/reviews"

export default function Reviews() {
  return (
    <>
      <ul className={styles.contant}>
        {reviews.map((item, id)=> (
          <li key={id} className={styles.items}>
            <p className={styles.name}>{item.name}</p>
            <p className={styles.description}>{item.description}</p>
            <p className={styles.date}>{item.date}</p>
          </li>
          ))
        }
      </ul>
      <a href="/contacts" className={styles.btn}>надіслати відгук</a>
    </>
  )
}