'use client'
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import cornerRightOrange from '@/assets/svg/corner-right-orange-big.svg';
import cornerLeftOrange from '@/assets/svg/corner-left-orange-big.svg';


import styles from './section-contacts.module.scss';



const homeTitle = "Чому варто купувати в нашому інтернет-магазині?";
const aboutTitle = "Ми не тільки говоримо, а й робимо!";


const homeText = [
  {
    text: "З перших днів життя малюка потрібно оточити теплом, любов'ю і турботою. Бути батьками непросто, але якісні речі, обрані в нашому онлайн-каталозі, допоможуть вам легко звикнути до нової ролі і насолоджуватися часом, проведеним з малечею."
  },
  {
    text: "Але чому потрібно вибрати саме наш мультибрендовий торговельний майданчик? Все просто: ми самі батьки, тому можемо дати корисні поради з придбання товарів і запропонувати оптимальні моделі для дитячих потреб."
  },
  {
    text: "Будемо раді швидко оформити ваше замовлення і приступити до його відправлення. Доставку здійснюємо у всі міста України. Якщо у Вас виникнуть питання, будемо раді відповісти на них."
  }
];

const aboutText = [
  {
    text: "Інтернет-магазин «Enfys» працює вже давно на ринку, і завдяки величезному досвіду нашої діяльності ми навчилися вирішувати завдання і проблеми будь-якої складності. Все це виховало в нас відповідальність за свою справу, тому ми цінуємо своєю репутацією і співпрацюємо тільки з надійними постачальниками, надаючи своїм Клієнтам тільки якісні і надійні товари." 
  },
  {
    text: "Пропонуємо величезний вибір дитячих речей: шезлонги, стільчики-гойдалки, дитячі конверти і муфти, манежі, коляски, ліжечка та багато іншого. У першу чергу ми думаємо про самих маленьких і вимогливих покупців і намагаємося радувати батьків високим рівнем якості і величезним вибором. І все це від надійних постачальників, разом з якими ми гарантуємо високу якість від виробника. А при виникненні будь-яких питань щодо нашої продукції, ми з радістю запропонуємо грамотну та кваліфіковану консультацію щодо вибору, використання і характеристикам тієї чи іншої покупки. Нам важливо, щоб у Вас була повна і достовірна інформація про необхідний Вами товар. Наш Клієнт - задоволений Клієнт!"
  }
];

export default function Contacts() {
  const [isTitle, setIsTitle] = useState(homeTitle);
  const [isText, setIsText] = useState(homeText);

  const path = usePathname().replace("/", "");

  useEffect(() => {
    switch (path) {
    
      case "about":
        setIsTitle(aboutTitle);
        setIsText(aboutText);
        break;
      
      default:
        setIsTitle(homeTitle);
        setIsText(homeText);
        break;
    }
  }, [path]);

  return (
    <section className={styles.section}>
       <div className={styles.corner_left}>
          <Image
            src={cornerLeftOrange}
            alt="cornerLeft"
            priority={true}
            loading="eager"
          />
        </div>
        <div className={styles.corner_right}>
          <Image
            src={cornerRightOrange}
            alt="cornerRight"
            priority={true}
            loading="eager"
          />
        </div>
      <div className={styles.container}>
        <h2 className={styles.title}>{isTitle}</h2>
        <div className={styles.container_text}>
          {isText.map(({text}, id) => (
            <p key={id} className={styles.text}>{text}</p>
          ))}
        </div>
          <Link href="/contacts" className={styles.btn}>контакти</Link>
      </div>
    </section>
  )}