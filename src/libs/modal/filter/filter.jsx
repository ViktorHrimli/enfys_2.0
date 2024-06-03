import styles from './filter.module.scss'
import Image from 'next/image';
import checked from "@/assets/svg/check.svg";

import cornerRightOrange from '@/assets/svg/corner-right-green.svg';
import cornerLeftOrange from '@/assets/svg/corner-left-green.svg';
import starsLeft from '@/assets/svg/stars-left.svg';
import starsRight from '@/assets/svg/stars-right.svg';


export default function Filter({ setIsOpenFilter }) {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
      <div className={styles.corner_left}>
          <Image
            src={cornerLeftOrange}
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
        <div className={styles.stars_left}>
          <Image
            src={starsLeft}
            alt="stars"
            priority={true}
            loading="eager"
          />
        </div>
        <div className={styles.stars_right}>
          <Image
            src={starsRight}
            alt="stars"
            priority={true}
            loading="eager"
          />
        </div>
      <div className={styles.closed} onClick={()=> setIsOpenFilter(false)}>
        <svg className={styles.closed_svg} xmlns="http://www.w3.org/2000/svg"  width="30" height="30"  viewBox="0 0 24 24"><path fill="white" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"/></svg>
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
            <p className={styles.sorting_text}>ЦІНА</p>
            <div className={styles.price_box}>
              <div className={styles.price}>
                <input className={styles.style_input} type="number" placeholder='від' />
              </div>
              <div className={styles.price}>
                <input className={styles.style_input} type="number" placeholder='до' />
              </div>
            </div>
            </div>
          <div className={styles.right_box}>
            <p className={styles.sorting_text}>Бренд</p>
            <div className={styles.container_input}>
              <label htmlFor="Carrello" className={styles.custom_checkbox}>
                <input type="checkbox" id="Carrello" name="Carrello" />
                <span className={styles.checkmark}>
                  <Image 
                    src={checked}
                    alt="img"
                    priority={true}
                    loading="eager"
                  />
                </span>
                Carrello
              </label>
              <label htmlFor="Lorelli" className={styles.custom_checkbox}>
                <input type="checkbox" id="Lorelli" name="Lorelli" />
                <span className={styles.checkmark}>
                  <Image 
                    src={checked}
                    alt="img"
                    priority={true}
                    loading="eager"
                  />
                </span>
                Lorelli
              </label>
              <label htmlFor="Tilly" className={styles.custom_checkbox}>
                <input type="checkbox" id="Tilly" name="Tilly" />
                <span className={styles.checkmark}>
                  <Image 
                    src={checked}
                    alt="img"
                    priority={true}
                    loading="eager"
                  />
                </span>
                Tilly
              </label>
              <label htmlFor="BabyZz" className={styles.custom_checkbox}>
                <input type="checkbox" id="BabyZz" name="BabyZz" />
                <span className={styles.checkmark}>
                  <Image 
                    src={checked}
                    alt="img"
                    priority={true}
                    loading="eager"
                  />
                </span>
                BabyZz
              </label>
              <label htmlFor="NINOS" className={styles.custom_checkbox}>
                <input type="checkbox" id="NINOS" name="NINOS" />
                <span className={styles.checkmark}>
                  <Image 
                    src={checked}
                    alt="img"
                    priority={true}
                    loading="eager"
                  />
                </span>
                  NINOS
              </label>
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