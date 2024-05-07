import Image from "next/image";
import styles from "./partners.module.scss";


import enfysProductBadgeNew from "@/assets/svg/icons/enfys_product_badge_new.svg";
import enfysProductBadgeDelivery from "@/assets/svg/icons/enfys_product_badge_delivery.svg";
import enfysProductBadgeBest from "@/assets/svg/icons/enfys_product_badge_best.svg";
import payPart from "@/assets/svg/icons/paypart.svg";
import enfysProductBadgeWarranty from "@/assets/svg/icons/enfys_product_badge_warranty.svg"

export default function PartnersIcon() { 
  return (
    <ul className={styles.list}>
      <li className={styles.items}>
        <div className={styles.background}></div>
        <Image 
          src={enfysProductBadgeNew}
          alt="New"
          priority={true}
          loading="eager"
          quality={100}
          style={{ objectFit: "cover", position: "absolute", zIndex: "2"}}
        />
      </li>
      <li className={styles.items}>
        <div className={styles.background}></div>
        <Image 
          src={enfysProductBadgeDelivery}
          alt="Delivery"
          priority={true}
          loading="eager"
          quality={100}
          style={{ objectFit: "cover", position: "absolute", zIndex: "2"}}

        />
      </li>
      <li className={styles.items}>
        <div className={styles.background}></div>
        <Image 
          src={enfysProductBadgeBest}
          alt="Best"
          priority={true}
          loading="eager"
          quality={100}
          style={{ objectFit: "cover", position: "absolute", zIndex: "2"}}
        />
      </li>
      <li className={styles.items}>
        <div className={styles.background}></div>
        <Image 
          src={payPart}
          alt="Pay"
          priority={true}
          loading="eager"
          quality={100}
          style={{ objectFit: "cover", position: "absolute", zIndex: "2", marginTop: "1px", width: "32px", height: "32px"}}
        />
      </li>
      <li className={styles.items}>
        <div className={styles.background}></div>
        <Image 
          src={enfysProductBadgeWarranty}
          alt="Pay"
          priority={true}
          loading="eager"
          quality={100}
          style={{ objectFit: "cover", position: "absolute", zIndex: "2"}}
        />
      </li>
    </ul>
  )
} 