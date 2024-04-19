import styles from './reviews.module.scss'

export default function Reviews() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.header}>Будь ласка заповните форму</h1>
        <input type="text" placeholder="Ім’я"  className={styles.input_nme} />
        <input type="text" placeholder="Повідомлення" className={styles.input_comit} />
        <button className={styles.btn}>надіслати</button>
        <button className={styles.btn_close}>X</button>
      </div>
    </div>
  )
}