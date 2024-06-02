import Image from "next/image";
import styles from "./partners.module.scss";


import enfysProductBadgeNew from "@/assets/svg/icons/enfys_product_badge_new.svg";
import enfysProductBadgeDelivery from "@/assets/svg/icons/enfys_product_badge_delivery.svg";
import enfysProductBadgeBest from "@/assets/svg/icons/enfys_product_badge_best.svg";
import payPart from "@/assets/svg/icons/paypart.svg";
import enfysProductBadgeWarranty from "@/assets/svg/icons/enfys_product_badge_warranty.svg"

export default function PartnersIcon({ data, name }) { 
  var filter = data.filter(product => product.attributes.title === name);

  var dataIcon = filter[0].attributes.icons[0];

  var bestsellerIcon = dataIcon.bestseller;
  var newIcon = dataIcon.new;
  var free_shippingIcon = dataIcon.free_shipping;
  var guaranteeIcon = dataIcon.guarantee;
  var payment_in_installmentsIcon = dataIcon.payment_in_installments;

  return (
    <ul className={styles.list}>
      {newIcon && 
      <li className={styles.items}>
        <div className={styles.background}></div>
        <Image 
          src={enfysProductBadgeNew}
          alt="New"
          priority={true}
          loading="eager"
          quality={100}
          style={{ objectFit: "cover", position: "absolute", zIndex: "1"}}
        />
      </li>
      }
      {free_shippingIcon &&
        <li className={styles.items}>
          <div className={styles.background}></div>
          <Image
            src={enfysProductBadgeDelivery}
            alt="Delivery"
            priority={true}
            loading="eager"
            quality={100}
            style={{ objectFit: "cover", position: "absolute", zIndex: "1" }}
          />
        </li>
      }
      {bestsellerIcon &&
        <li className={styles.items}>
          <div className={styles.background}></div>
          <Image
            src={enfysProductBadgeBest}
            alt="Best"
            priority={true}
            loading="eager"
            quality={100}
            style={{ objectFit: "cover", position: "absolute", zIndex: "1" }}
          />
        </li>
      }
      {guaranteeIcon && 
      <li className={styles.items}>
        <div className={styles.background}></div>
        <Image 
          src={payPart}
          alt="Pay"
          priority={true}
          loading="eager"
          quality={100}
          style={{ objectFit: "cover", position: "absolute", zIndex: "1", marginTop: "1px"}}
        />
        </li>
      }
      {payment_in_installmentsIcon &&
      <li className={styles.items}>
        <div className={styles.background}></div>
        <Image 
          src={enfysProductBadgeWarranty}
          alt="Pay"
          priority={true}
          loading="eager"
          quality={100}
          style={{ objectFit: "cover", position: "absolute", zIndex: "1"}}
        />
        </li>
      }
    </ul>
  )
} 