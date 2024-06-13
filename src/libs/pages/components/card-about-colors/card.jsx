import styles from "./card.module.scss"
import Image from "next/image"


var { data } = await (await fetch('https://www.admin-enfys.space/api/animations-lists?populate[animationsItem][populate]=*', { cache: 'no-cache' })).json();

export default function Card({ dataBase }) {
  var category = dataBase[0].attributes.group;
  var card = data.filter(product => product.attributes.animationsItem.title === category);

  return (
    <section className={styles.section}>
      <div className={styles.box}>
        <div className={styles.left_box}>
          <div className={styles.left_green}>
            <Image 
              src={`https://www.admin-enfys.space${card[0].attributes.animationsItem.Image.data.attributes.url}`}
              alt="image"
              priority={true}
              loading="eager"
              quality={100}
              width={396}
              height={517}
            />
            <div className={styles.left_text_green}>
              <p className={styles.p} >{card[0].attributes.animationsItem.text}</p>
            </div>
          </div>

          <div className={styles.left_orange}>
            <Image 
              src={`https://www.admin-enfys.space${card[0].attributes.animationsItem.image_4.data.attributes.url}`}
              alt="image"
              priority={true}
              loading="eager"
              quality={100}
              width={361}
              height={505}
            />
            <div className={styles.left_text_orange}>
              <p className={styles.p} >{card[0].attributes.animationsItem.text_4} </p>
            </div>
          </div>
          <div className={styles.left_red}>
              <Image 
                src={`https://www.admin-enfys.space${card[0].attributes.animationsItem.image_7.data.attributes.url}`}
                alt="image"
                priority={true}
                loading="eager"
                quality={100}
                width={440}
                height={388}
              />
            <div className={styles.left_text_red}>
              <p className={styles.p} >{card[0].attributes.animationsItem.text_7}</p>
            </div>
          </div>
        </div>
        
        <div className={styles.right_box}>
          <div className={styles.right_red}>
            <Image 
              src={`https://www.admin-enfys.space${card[0].attributes.animationsItem.image_2.data.attributes.url}`}
              alt="image"
              priority={true}
              loading="eager"
              quality={100}
              width={552}
              height={441}
            />
            <div className={styles.right_text_red}>
              <p className={styles.p} >{card[0].attributes.animationsItem.text_2}</p>
            </div>
          </div>
          <div className={styles.right_yello}>
            <Image 
              src={`https://www.admin-enfys.space${card[0].attributes.animationsItem.image_3.data.attributes.url}`}
              alt="image"
              priority={true}
              loading="eager"
              quality={100}
              width={300}
              height={300}
            />
            <div className={styles.right_text_yello}>
              <p className={styles.p} >{card[0].attributes.animationsItem.text_3}</p>
            </div>
          </div>
          <div className={styles.right_green}>
            <Image 
              src={`https://www.admin-enfys.space${card[0].attributes.animationsItem.image_5.data.attributes.url}`}
              alt="image"
              priority={true}
              loading="eager"
              quality={100}
              width={358}
              height={269}
            />
            <div className={styles.right_text_green}>
              <p className={styles.p}>{card[0].attributes.animationsItem.text_5}</p>
            </div>
          </div>
          <div className={styles.right_yello_bottom}>
            <Image 
              src={`https://www.admin-enfys.space${card[0].attributes.animationsItem.image_6.data.attributes.url}`}
              alt="image"
              priority={true}
              loading="eager"
              quality={100}
              width={435}
              height={687}
            />
            <div className={styles.right_text_yello_bottom }>
              <p>{card[0].attributes.animationsItem.text_6} </p>
            </div>
          </div>
          <div className={styles.text_container}>
            <p>{card[0].attributes.animationsItem.universalText}</p>
            <ul>
              {card[0].attributes.animationsItem.list.map(({description}, id) => (
                <li key={id}>
                  <p>
                    {description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}