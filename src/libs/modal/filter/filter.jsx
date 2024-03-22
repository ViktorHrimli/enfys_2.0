import styles from './filter.module.scss'

export default function Filter({ }) {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.container_filter}>
          <div className={styles.left_box}>
            <div className={styles.sorting_box}>
              <p className={styles.sorting_text}>СОРТУВАТИ ЗА</p>
              <input placeholder="Не обрано" name="sorting" list="sortings" />
<select id="sortings">
   <option value="від дешевих додорогих" />
   <option value="від дорогих до дешевих" />
</select>
            </div>
            <p>ЦІНА</p>
            <div className={styles.price_box}>
              <div className={styles.price}>від <input type="number" /></div>
              <div className={styles.price}>до <input type="number" /></div>
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