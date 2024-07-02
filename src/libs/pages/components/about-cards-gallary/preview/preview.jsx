"use client"
import Image from 'next/image'
import { useState } from 'react'
import styles from './preview.module.scss'

export default function Preview({data, keyId, setIsPreview, galleryLength, setIsGallery }) { 
  const [index, setIndex] = useState(0);
  const max = galleryLength - 1;

  const arrowNext = () => {
    if (index !== max) {
      setIndex(index + 1);
    }
    else {
      setIsGallery(`https://www.admin-enfys.space${data[keyId].attributes.gallery.data[max].attributes.url}`)
    }
  }

  const arrowPrrev = () => {
    if(index === 0) {
      setIsGallery(`https://www.admin-enfys.space${data[keyId].attributes.gallery.data[0].attributes.url}`);
    } else {
      setIndex(index - 1);
    }
  }
  return (
    <div className={styles.container}>
      <div style={{width: "100vw", height: "100vh", position: "absolute", left: "0", top: "0"}} onClick={() => setIsPreview(false)}></div>
      <div className={styles.closed} onClick={() => setIsPreview(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"/></svg>
      </div>
      <div className={styles.arr_left} onClick={arrowPrrev}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M16.62 2.99a1.25 1.25 0 0 0-1.77 0L6.54 11.3a.996.996 0 0 0 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76"/></svg>
      </div>
      <div className={styles.img}>
        <Image 
          src={`https://www.admin-enfys.space${data[keyId].attributes.gallery.data[index].attributes.url}`}
          alt="image"
          priority={true}
          loading="eager"
          quality={100}
          width={200}
          height={200}
          style={{objectFit: "contain", width: "100%", height: "100%"}}
        />
        <div className={styles.text_container}>
          <p className={styles.text}>
            {'* Кольори на екрані можуть дещо відрізнятися від реальних кольорів, залежно від налаштувань вашого екрану.'}
          </p>
        </div>
      </div>
      <div className={styles.arr_right} onClick={arrowNext}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M16.62 2.99a1.25 1.25 0 0 0-1.77 0L6.54 11.3a.996.996 0 0 0 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76"/></svg>
      </div>
    </div>
  )
}