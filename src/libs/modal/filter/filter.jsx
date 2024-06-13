"use client"
import { useState, useEffect } from 'react';
import styles from './filter.module.scss'
import Image from 'next/image';
import checked from "@/assets/svg/check.svg";

import cornerRightOrange from '@/assets/svg/corner-right-green.svg';
import cornerLeftOrange from '@/assets/svg/corner-left-green.svg';
import starsLeft from '@/assets/svg/stars-left.svg';
import starsRight from '@/assets/svg/stars-right.svg';
import { motion } from "framer-motion";
import { event } from 'jquery';


export default function Filter({ setIsOpenFilter, isData, dollar, isFilters, setIsFilters }) {
  //  chackbox chacked state
  const [isValue, setIsValue] = useState("не обрано");
  const [isAnimationsInput, setIsAnimationsInput] = useState(false);

  const [isCarrelloChack, setIsCarrelloChack] = useState(true);
  const [isLorelliChack, setIsLorelliChack] = useState(true);
  const [isTillyChack, setIsTillyChack] = useState(true);
  const [isBabyZzChack, setIsBabyZzChack] = useState(true);
  const [isNINOSChack, setIsNINOSChack] = useState(true);
  

  // filters price state
  const [isSort, setIsSort] = useState([]); 
  const [isMin, setIsMin] = useState(0);
  const [isMax, setIsMax] = useState(100000);

  // filters brands state
  const [isCarrello, setIsCarrello] = useState([]);
  const [isLorelli, setIsLorelli] = useState([]);
  const [isTilly, setIsTilly] = useState([]);
  const [isBabyZz, setIsBabyZz] = useState([]);
  const [isNINOS, setIsNINOS] = useState([]);

  const minPrice = isSort.filter(product => product.attributes.price * dollar > isMin); 
  const price = minPrice.filter(product => product.attributes.price * dollar < isMax);


  // filters brands filters
  const Carrelo = price.filter(product => product.attributes.brand === "Carrello");
  const Lorelli = price.filter(product => product.attributes.brand === "Lorelli");
  const Tilly = price.filter(product => product.attributes.brand === "Tilly");
  const BabyZz = price.filter(product => product.attributes.brand === "BabyZz");
  const NINOS = price.filter(product => product.attributes.brand === "NINOS");
  
  useEffect(() => {
      setIsSort(isData);
      setIsCarrello(Carrelo);
      setIsLorelli(Lorelli);
      setIsTilly(Tilly);
      setIsBabyZz(BabyZz);
      setIsNINOS(NINOS);
  }, [isFilters, isMin, isMax, isSort, isValue])


  // functions 
  const fromCheapToExpensive = () => {
    setIsSort(isData.sort((a, b) => a.attributes.price - b.attributes.price));
    setIsValue("від дешевих до дорогих");
    setIsAnimationsInput(false);
  };

  const fromExpensiveToCheap = () => {
    setIsSort(isData.sort((a, b) => b.attributes.price - a.attributes.price));
    setIsValue("від дорогих до дешевих");
    setIsAnimationsInput(false);
  }

  const handleMinChange = (event) => {
    setIsMin(event.target.value);

    if (!event.target.value) {
      setIsMin(0);
    }
  };

  const handleMaxChange = (event) => {
    setIsMax(event.target.value);

    if (!event.target.value) {
      setIsMax(1000000);
    }
  };

  const clearValue = (event) => {
    event.target.value = "";
  }

  const handleCheckboxCarrelo = (event) => {
    const { checked } = event.target;
      setIsCarrelloChack(checked);
      setIsCarrello(Carrelo);

    if (!checked) {
      setIsCarrello([]);
    } 
  };
  
  const handleCheckboxLorelli = (event) => {
    const { checked } = event.target;
      setIsLorelliChack(checked);
      setIsLorelli(Lorelli);

    if (!checked) {
      setIsLorelli([]);
    } 
  };

  const handleCheckboxTilly = (event) => {
    const { checked } = event.target;
      setIsTillyChack(checked);
      setIsTilly(Tilly);

    if (!checked) {
      setIsTilly([]);
    } 
  };

  const handleCheckboxBabyZz = (event) => {
    const { checked } = event.target;
      setIsBabyZzChack(checked);
      setIsBabyZz(BabyZz);


    if (!checked) {
      setIsBabyZz([]);
    } 
  };

  const handleCheckboxNINOS = (event) => {
    const { checked } = event.target;
      setIsNINOSChack(checked);
      setIsNINOS(NINOS);

    if (!checked) {
      setIsNINOS([]);
    } 
  };

  const confirm = () => {
    setIsFilters([...isCarrello, ...isLorelli, ...isTilly, ...isBabyZz, ...isNINOS]);

    const timeoutId = setTimeout(() => {
      setIsOpenFilter(false);
      clearTimeout(timeoutId);
    }, 500);
  }

  const cleaning = () => {
    setIsCarrello(Carrelo);
    setIsLorelli(Lorelli);
    setIsTilly(Tilly);
    setIsBabyZz(BabyZz);
    setIsNINOS(NINOS);
    setIsCarrelloChack(true);
    setIsLorelliChack(true);
    setIsTillyChack(true);
    setIsBabyZzChack(true);
    setIsNINOSChack(true);
    setIsMin(0);
    setIsMax(100000);
    setIsSort(isData);
    setIsValue("не обрано");
    document.getElementById('valueMin').value = '';
    document.getElementById('valueMax').value = '';
  }

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
              <motion.div
                  animate={{ height: isAnimationsInput ? "100%" : "" }}
                  transition={{ duration: 0.3 }}
                  className={styles.select}
                >
                <motion.div
                  animate={{ rotate: isAnimationsInput ? "180deg" : "0deg" }}
                  transition={{ duration: 0.3 }}
                  className={styles.select_arrow}
                >
                  <svg xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 1024 1024"
                  >
                    <path fill="currentColor" d="M8.2 275.4c0-8.6 3.4-17.401 10-24.001c13.2-13.2 34.8-13.2 48 0l451.8 451.8l445.2-445.2c13.2-13.2 34.8-13.2 48 0s13.2 34.8 0 48L542 775.399c-13.2 13.2-34.8 13.2-48 0l-475.8-475.8c-6.8-6.8-10-15.4-10-24.199" /></svg>
                </motion.div>
                <input onClick={()=> setIsAnimationsInput(!isAnimationsInput)} type="text" className={`${styles.select} ${styles.style_input}`} style={{border: "none"}} value={isValue} readOnly />
                <ul style={{paddingLeft: "15px"}}>
                  <li onClick={fromCheapToExpensive}>від дешевих до дорогих</li>
                  <li onClick={fromExpensiveToCheap}>від дорогих до дешевих</li>
                </ul>
              </motion.div>
            </div>
            <p className={styles.sorting_text}>ЦІНА</p>
            <div className={styles.price_box}>
              <div className={styles.price}>
                <input className={styles.style_input} type="number" id='valueMin' placeholder='від' onChange={handleMinChange} />
              </div>
              <div className={styles.price}>
                <input className={styles.style_input} type="number" id='valueMax' placeholder='до' onChange={handleMaxChange} />
              </div>
            </div>
            </div>
          <div className={styles.right_box}>
            <p className={styles.sorting_text}>Бренд</p>
            <div className={styles.container_input}>
              <label htmlFor="Carrello" className={styles.custom_checkbox}>
                <input checked={isCarrelloChack} type="checkbox" id="Carrello" name="Carrello" onChange={handleCheckboxCarrelo} />
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
                <input checked={isLorelliChack} type="checkbox" id="Lorelli" name="Lorelli"  onChange={handleCheckboxLorelli} />
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
                <input checked={isTillyChack} type="checkbox" id="Tilly" name="Tilly"  onChange={handleCheckboxTilly} />
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
                <input checked={isBabyZzChack} type="checkbox" id="BabyZz" name="BabyZz"  onChange={handleCheckboxBabyZz} />
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
                <input checked={isNINOSChack} type="checkbox" id="NINOS" name="NINOS"  onChange={handleCheckboxNINOS} />
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
          <button className={styles.btn_save} onClick={confirm}>
          ЗБЕРЕГТИ
          </button>
          <button className={styles.btn_reset} onClick={cleaning}>
          СКИНУТИ ФІЛЬТРИ
          </button>
          </div>
      </div>
    </div>
  )
}