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
        <div>
          {/* qwertyui */}
        </div>
      </div>
    </div>
  )
}