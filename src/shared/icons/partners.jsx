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
        <Image 
          src={enfysProductBadgeNew}
          alt="New"
          priority={true}
          loading="eager"
          quality={100}
          style={{objectFit: "cover"}}
        />
      </li>
      <li>
        <Image 
          src={enfysProductBadgeDelivery}
          alt="Delivery"
          priority={true}
          loading="eager"
          quality={100}
          style={{objectFit: "cover"}}
        />
      </li>
      <li>
        <Image 
          src={enfysProductBadgeBest}
          alt="Best"
          priority={true}
          loading="eager"
          quality={100}
          style={{objectFit: "cover"}}
        />
      </li>
      <li>
        <Image 
          src={payPart}
          alt="Pay"
          priority={true}
          loading="eager"
          quality={100}
          style={{objectFit: "cover"}}
        />
      </li>
      <li>
        <Image 
          src={enfysProductBadgeWarranty}
          alt="Pay"
          priority={true}
          loading="eager"
          quality={100}
          style={{objectFit: "cover"}}
        />
      </li>
    </ul>
  )
} 