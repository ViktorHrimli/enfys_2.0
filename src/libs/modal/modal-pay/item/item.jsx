"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "../modal-pay.module.scss";

export default function Item({
  storedItems,
  setStoredItems,
  ImageCards,
  TitleCards,
  PriceCards,
  QuantityCards,
  id,
}) {
  const [isQuantity, setIsQuantity] = useState(QuantityCards);

  useEffect(() => {
    var theFuckingBigData = JSON.parse(localStorage.getItem("storedItems")).map(
      (card, cardId) =>
        cardId === id ? { ...card, QuantityCards: isQuantity } : card
    );

    localStorage.setItem("storedItems", JSON.stringify(theFuckingBigData));
  }, [isQuantity]);

  function quantityUp() {
    setIsQuantity((prev) => ++prev);
  }

  function quantityDown() {
    setIsQuantity((prev) => --prev);

    if (isQuantity < 2) {
      setIsQuantity(1);
    }
  }

  function up() {
    quantityUp();
  }

  function down() {
    quantityDown();
  }

  const handleDelete = (idCard) => {
    const deleteCard = storedItems.filter((_, id) => id !== idCard);

    setStoredItems(deleteCard);
    localStorage.setItem("storedItems", JSON.stringify(deleteCard));
  };

  return (
    <>
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
          <span className={styles.quantity} onClick={() => down(id)}>
            -
          </span>

          <p className={styles.quantity}>{isQuantity}</p>

          <span className={styles.quantity} onClick={() => up(id)}>
            +
          </span>
        </div>
      </div>
      <p className={styles.price}>{PriceCards * isQuantity} гривень</p>

      <div className={styles.del} onClick={() => handleDelete(id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
        >
          <path
            fill="black"
            d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"
          />
        </svg>
      </div>
    </>
  );
}
