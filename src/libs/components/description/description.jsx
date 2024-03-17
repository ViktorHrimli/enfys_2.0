import Image from 'next/image'

import description from '@/assets/svg/description.png'
import styles from './description.module.scss'

export default function Description() { 
  return (
    <section className={styles.section}>
      <div className={styles.img}></div>
        <Image
          src={description}
          alt="pay"
          priority={true}
          loading="eager"
          quality={100}
          style={{objectFit: "cover", objectPosition: "center", width: "100vw",height:"100%"}}
        />
      <div className={styles.container}>
        <h2 className={styles.title}>Найкращий спосіб зробити дитину хорошою - це зробити її щасливою. Оскар Уайльд</h2>
      </div>
    </section>
  )
}
