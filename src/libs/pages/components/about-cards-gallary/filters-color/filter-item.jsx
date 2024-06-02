import Link from "next/link";
import Image from "next/image";
import styles from "../about-cards-gallary.module.scss";

export default function FilterItem({ dataBase, name}) {
  var filter = dataBase.filter(product => product.attributes.link === name);
  
  return (
    <Link href={`${name}`} className={styles.item_colors_link}>
      {filter.length > 0 && 
      <Image
        src={`https://www.admin-enfys.space${filter[0].attributes.gallery.data[0].attributes.url}`}
        alt="item"
        priority={true}
        loading="eager"
        quality={100}
        width={100}
        height={100}
        style={{ objectFit: "cover" }}
      />
      }
    </Link>
  )
}
