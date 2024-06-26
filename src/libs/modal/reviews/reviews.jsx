import styles from './reviews.module.scss'
import Image from 'next/image'

import closed from '@/assets/svg/closed.svg';
import cornerRightOrange from '@/assets/svg/corner-right-orange.svg';
import cornerLeftOrange from '@/assets/svg/corner-left-orange.svg';


export default function ReviewsModal({setIsChange}) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.corner_left}>
          <Image
            src={cornerLeftOrange}
            alt="pay"
            priority={true}
            loading="eager"
          />
        </div>
        <h2 className={styles.header}>Будь ласка заповните форму</h2>
        <input
          type="text"
          placeholder="Ім’я"
          className={styles.input_name}
        />
        <textarea
          type="text"
          placeholder="Повідомлення"
          className={styles.input_comit}
        />

        <button className={styles.btn} >надіслати</button>
        <div className={styles.closed} onClick={()=> setIsChange(false)}>
          <Image
            src={closed}
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
      </div>
    </div>
  )
}