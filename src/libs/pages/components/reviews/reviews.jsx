"use client"
import { useState } from "react";
import styles from "./reviews.module.scss";
import { reviews } from "@/shared/reviews";
import ReviewsModal from "@/libs/modal/reviews/reviews";

export default function Reviews() {
  const [isChange, setIsChange] = useState(false);

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
      <button className={styles.btn} onClick={() => setIsChange(true)}>надіслати відгук</button>
      {isChange && <ReviewsModal setIsChange={setIsChange} />}
    </>
  )
}