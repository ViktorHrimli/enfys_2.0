import styles from './thank-you.module.scss'
import Image from 'next/image'
import closed from '@/assets/svg/closed.svg';


export default function ThenkYou({setIsThenkyou}) {
  return (
    <div className={styles.container}>
      <div className={styles.contant}>
        <div className={styles.closed} onClick={() => setIsThenkyou(false)}>
            <Image
              src={closed}
              alt="pay"
              priority={true}
              loading="eager"
            />
        </div>
        <h2 className={styles.header}>дякуємо, ваш запит успішно надісланий</h2>
        <p className={styles.inform}>Ми зв’яжемося з Вами якомога швидше. Гарного дня!</p>
        <p className={styles.post_scriptum}>P.S. Пам’ятайте, ви - прекрасні батьки для своєї дитини.</p>
        <div>
          {/* qwertyui */}
        </div>
      </div>
    </div>
  )
}