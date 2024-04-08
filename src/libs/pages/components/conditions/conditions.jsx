import styles from "./conditions.module.scss"

export default function Conditions() { 
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.container_text}>
          <p>Безкоштовна доставка для замовлень від 5000 гривень</p>
        </div>
        <div className={styles.container_text}>
          <p>Всі товари сертифіковані</p>
        </div>
        <div className={styles.container_text}>
          <p>Повернення або обмін протягом 14 днів</p>
        </div>
      </div>
    </section>
  )
}