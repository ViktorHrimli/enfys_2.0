import { useState } from 'react';
import styles from './modal-pay.module.scss'
import Image from "next/image";
import Link from 'next/link';

export default function Pay({ setIsPay, storedItems, setStoredItems }) {
  const [isQuantity, setIsQuantity] = useState(1);

  
  const handleDelete = (idCard) => {
    const deleteCard = storedItems.filter((_, id) => id !== idCard);

    setStoredItems(deleteCard);
    // setIsQuantity(deleteCard.length);

    localStorage.setItem("storedItems", JSON.stringify(deleteCard));
  };

  const totalCardPrice = storedItems.reduce((accumulator, item) => {
    return accumulator + parseFloat(item.PriceCards);
  }, 0);

  
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.closed} onClick={()=> setIsPay(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="white" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"/></svg>
        </div>
        <h2 className={styles.title}>корзина</h2>
        <div className={styles.list}>
          <div className={styles.item_description}>
            <p className={styles.item_text} >Кількість</p>
            <p className={styles.item_text}>Сума</p>
          </div>  
        <ul>
            {storedItems.map(({ ImageCards, TitleCards, PriceCards }, id) => {
            return (
              <li key={id} className={styles.item}>
                <Image
                  src={ImageCards}
                  alt="Image"
                  priority={true}
                  loading="eager"
                  quality={100}
                  width={100}
                  height={100}
                  className={styles.item_img}
                />
                <p className={styles.item_title}>{TitleCards}</p>
                <div className={styles.item_quantity}>

                  <div className={styles.container_quantity}>
                    <span className={styles.quantity} onClick={()=> setIsQuantity(isQuantity - 1)}>-</span>
                      <p className={styles.quantity}>{isQuantity}</p>
                    <span className={styles.quantity} onClick={()=> setIsQuantity(isQuantity + 1)}>+</span>
                  </div>
                </div>
                <p className={styles.price}>{PriceCards * isQuantity} гривень</p>

                <div className={styles.del} onClick={()=> handleDelete(id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="black" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"/></svg>
                </div>
              </li>
            )
          })}
        </ul>
        </div>
        <div className={styles.result}>
          <p className={styles.text}>Підсумок</p>
          <p className={styles.text}>{totalCardPrice} гривень</p>
        </div>
        <Link href="/oformlennya-zamovlennya" className={styles.btn} onClick={()=> setIsPay(false)}>оформити замовлення</Link>
      </div>
    </div>
  )
}