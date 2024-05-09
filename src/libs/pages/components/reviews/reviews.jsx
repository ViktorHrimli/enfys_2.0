"use client"
import { useState, useEffect } from "react";
import styles from "./reviews.module.scss";
import { reviews } from "@/shared/reviews";
import ReviewsModal from "@/libs/modal/reviews/reviews";
import { motion, AnimatePresence } from "framer-motion";


export default function Reviews() {
  const [isChange, setIsChange] = useState(false);

  const [isScroll, setIsScroll] = useState(
  typeof window !== "undefined" ? window.scrollY : 0
  );

  useEffect(() => {
    if (isChange) {
      setIsScroll(window.scrollY);

      document.body.style.overflow = "hidden";
      document.body.style.maxHeight = "100vh";
    }
    
    window.scrollTo(0, isScroll);

    return () => {
      document.body.style.overflowX = "hidden";
      document.body.style.maxHeight = "";
    };
  }, [isChange]);

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
        <AnimatePresence>
          {isChange && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                >
                <ReviewsModal setIsChange={setIsChange} />
              </motion.div>
            )}
        </AnimatePresence>
    </>
  )
}