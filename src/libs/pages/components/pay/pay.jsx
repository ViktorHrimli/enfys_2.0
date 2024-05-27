"use client"
import styles from './pay.module.scss'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Liqpay } from '@/libs/components/liqpay/Liqpay';
import { NovaPostList } from '@/libs/components/nova-post-api/NovaPostList';
import { MeMoNovaPost } from '@/libs/components/nova-post-api/NovaPostA';


export default function Pay() {
  const [storedItems, setStoredItems] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
  });

  useEffect(() => {
    var localeData = JSON.parse(localStorage.getItem("storedItems"));
    localeData && setStoredItems(localeData);
  }, []);

  // Обработчик изменения полей формы
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data:', formData);
    // Тут можно добавить логику для отправки данных на сервер
  };

  const totalCardPrice = storedItems.reduce((accumulator, item) => {
    return accumulator + parseFloat(item.PriceCards);
  }, 0);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
      <div className={styles.container_form}>
          <h2 className={styles.title}>Ваші контактні дані</h2>
          
      <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.container_input }>
        <input
        className={styles.input}
          type="text"
          id="firstName"
          name="firstName"
          placeholder='Ім’я'
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
        className={styles.input}
          type="text"
          id="lastName"
          name="lastName"
          placeholder='Прізвище'
                
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div className={styles.container_input }>
        <input
        className={styles.input}
          type="tel"
          id="phone"
          name="phone"
          placeholder='Телефон'
                
          value={formData.phone}
          onChange={handleChange}
        />
        <input
        className={styles.input}
          type="email"
          id="email"
          name="email"
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
        />
        </div>
        <div className={styles.delivery}>
          <p className={styles.title}>Доставка</p> 
          <p className={styles.title}>Спосіб оплати</p>
        </div>
          <div>
            <MeMoNovaPost />
        </div>
    </form>
    </div>
        <div className={styles.container_cards}>
          <h2 className={styles.title} style={{ color: "#FAF7F1", paddingBottom: "33px" }}>Ваше замовлення</h2>
          <div className={styles.container_contant}>
            <div className={styles.item_description}>
              <p className={styles.item_text}>Кількість</p>
              <p className={styles.item_text}>Сума</p>
            </div> 
            <ul className={styles.list}>
              {storedItems.map(({ImageCards, TitleCards, PriceCards}, id) => (
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
                    {/* <span className={styles.quantity} onClick={()=> setIsQuantity(isQuantity - 1)}>-</span> */}
                      {/* <p className={styles.quantity}>{isQuantity}</p> */}
                    {/* <span className={styles.quantity} onClick={()=> setIsQuantity(isQuantity + 1)}>+</span> */}
                  </div>
                </div>
                {/* <p className={styles.price}>{PriceCards * isQuantity} гривень</p> */}

              </li>
              ))}

            </ul>
            <div className={styles.container_price}>
              <p className={styles.text}>Підсумок</p>
              <p className={styles.price}>{totalCardPrice} ГРИВЕНЬ</p>
            </div>
          </div>

          <div className={styles.container_btn}>
            <Liqpay />
            <button className={styles.btn_edit}>редагувати замовлення</button>
          </div>
        </div>
      </div>
    </section>
  )
}