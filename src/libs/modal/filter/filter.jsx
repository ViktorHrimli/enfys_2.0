import styles from './filter.module.scss'

export default function Filter({ }) {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
      <div className={styles.closed}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="white" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"/></svg>
      </div>
        <div className={styles.container_filter}>
          <div className={styles.left_box}>
            <div className={styles.sorting_box}>
              <p className={styles.sorting_text}>СОРТУВАТИ ЗА</p>
<select id="sortings" className={`${styles.select} ${styles.style_input}`}>
   <option value="від дешевих додорогих" >від дешевих додорогих</option>
   <option value="від дорогих до дешевих" >від дорогих до дешевих</option>
</select>
            </div>
            <p>ЦІНА</p>
            <div className={styles.price_box}>
              <div className={styles.price}>від <input className={styles.style_input} type="number" /></div>
              <div className={styles.price}>до <input  className={styles.style_input}type="number" /></div>
            </div>
          </div>
          <div className={styles.right_box}>
            <p>Бренди</p>
            <div>
    <input type="checkbox" id="Carrello" name="Carrello" />
    <label for="Carrello">Carrello</label>
  </div>

  <div>
    <input type="checkbox" id="Lorelli" name="Lorelli" />
    <label for="Lorelli">Lorelli</label>
  </div>
  <div>
    <input type="checkbox" id="Tilly" name="Tilly" />
    <label for="Tilly">Tilly</label>
  </div>
  <div>
    <input type="checkbox" id="BabyZz" name="BabyZz" />
    <label for="BabyZz">BabyZz</label>
  </div>
  <div>
    <input type="checkbox" id="NINOS" name="NINOS" />
    <label for="NINOS">NINOS</label>
  </div>
        </div>
        </div>
          <div className={styles.btn_box}>
          <button className={styles.btn_save} >
          ЗБЕРЕГТИ
          </button>
          <button className={styles.btn_reset}>
          СКИНУТИ ФІЛЬТРИ
          </button>
          </div>
      </div>
    </div>
  )
}