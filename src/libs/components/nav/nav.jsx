"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import styles from "./nav.module.scss"

import facebook from '@/assets/svg/icons/facebook.svg';
import instagram from '@/assets/svg/icons/instagram.svg';
import youtube from '@/assets/svg/icons/youtube.svg';
import viber from '@/assets/svg/icons/viber.svg';

import language from '@/assets/svg/icons/language.svg';
import convenience from '@/assets/svg/icons/convenience.svg';

const social = [
  {
    icon: facebook,
    link: "/"
  },
  {
    icon: instagram,
    link: "/"
  },
  {
    icon: youtube,
    link: "/"
  },
  {
    icon: viber,
    link: "/"
  },
];


import {shop, strollers, furniture, accessories, transport, textile, toys, backpacks} from '@/shared/list'

export default function Nav({setIsMenu}) {
  const [isStrollers, setIsStrollers] = useState(false);
  const [isFurniture, setIsFurniture] = useState(false);
  const [isAccessories, setIsAccessories] = useState(false);
  const [isTransport, setIsTransport] = useState(false);
  const [isTextile, setIsTextile] = useState(false);


  const strollersArrow = () => {
    setIsStrollers(!isStrollers);
    setIsFurniture(false);
    setIsAccessories(false);
    setIsTransport(false);
    setIsTextile(false);
  }

  const furnitureArrow = () => {
    setIsFurniture(!isFurniture);
    setIsStrollers(false);
    setIsAccessories(false);
    setIsTransport(false);
    setIsTextile(false);
  }

  const accessoriesArrow = () => {
    setIsAccessories(!isAccessories);
    setIsStrollers(false);
    setIsFurniture(false);
    setIsTransport(false);
    setIsTextile(false);
  }

  const transportArrow = () => {
    setIsTransport(!isTransport);
    setIsStrollers(false);
    setIsFurniture(false);
    setIsAccessories(false);
    setIsTextile(false);
  }

  const textileArrow = () => {
    setIsTextile(!isTextile);
    setIsStrollers(false);
    setIsFurniture(false);
    setIsAccessories(false);
    setIsTransport(false);
  }

  return (
    <div className={styles.container}>
      {/* shop */}
      <ul className={styles.list}>
        {shop.map((item, id) => (
          <li key={id}>
            <Link onClick={()=> setIsMenu(false)} href={item.link} className={styles.title}>{item.title}</Link>
          </li>
        ))}
      </ul>
      {/* strollers */}
      <ul className={styles.list}>
      {strollers.map(({title, link, list}, id) => (
        <li key={id}>
          <div style={{display: "flex", position: "relative"}}>
            <Link onClick={()=> setIsMenu(false)} href={link} className={styles.title}>{title}</Link>
            <svg style={isStrollers ? { transform: "rotate( 0deg)" } : {}}
              onClick={strollersArrow}
              className={styles.arrow}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 1024 1024">
              <path fill="#FAEEEE" d="M8.2 751.4c0 8.6 3.4 17.401 10 24.001c13.2 13.2 34.8 13.2 48 0l451.8-451.8l445.2 445.2c13.2 13.2 34.8 13.2 48 0s13.2-34.8 0-48L542 251.401c-13.2-13.2-34.8-13.2-48 0l-475.8 475.8c-6.8 6.8-10 15.4-10 24.2z" />
            </svg>
          </div>
          <ul className={styles.list_text} style={isStrollers ? { display: "block", marginTop: "28px" } : {}}>
            {list.map(({item, link}, id) => (
              <li key={id}>
                <Link onClick={()=> setIsMenu(false)} href={link} className={styles.text}>{item}</Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
      {/* furniture */}
      {furniture.map(({title, link, list}, id) => (
        <li key={id}>
          <div style={{display: "flex", position: "relative"}}>
            <Link onClick={()=> setIsMenu(false)} href={link} className={styles.title}>{title}</Link>
            <svg style={isFurniture ? { transform: "rotate( 0deg)" } : {}}
              onClick={furnitureArrow}
              className={styles.arrow}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 1024 1024">
              <path fill="#FAEEEE" d="M8.2 751.4c0 8.6 3.4 17.401 10 24.001c13.2 13.2 34.8 13.2 48 0l451.8-451.8l445.2 445.2c13.2 13.2 34.8 13.2 48 0s13.2-34.8 0-48L542 251.401c-13.2-13.2-34.8-13.2-48 0l-475.8 475.8c-6.8 6.8-10 15.4-10 24.2z" />
            </svg>
          </div>
          <ul className={styles.list_text} style={isFurniture ? { display: "block", marginTop: "28px" } : {}}>
            {list.map(({item, link}, id) => (
              <li key={id}>
                <Link onClick={()=> setIsMenu(false)} href={link} className={styles.text}>{item}</Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
      {/* accessories */}
      {accessories.map(({title, link, list}, id) => (
        <li key={id}>
          <div style={{display: "flex", position: "relative"}}>
            <Link onClick={()=> setIsMenu(false)} href={link} className={styles.title}>{title}</Link>
            <svg style={isAccessories ? { transform: "rotate( 0deg)" } : {}}
              onClick={accessoriesArrow}
              className={styles.arrow}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 1024 1024">
              <path fill="#FAEEEE" d="M8.2 751.4c0 8.6 3.4 17.401 10 24.001c13.2 13.2 34.8 13.2 48 0l451.8-451.8l445.2 445.2c13.2 13.2 34.8 13.2 48 0s13.2-34.8 0-48L542 251.401c-13.2-13.2-34.8-13.2-48 0l-475.8 475.8c-6.8 6.8-10 15.4-10 24.2z" />
            </svg>
          </div>
          <ul className={styles.list_text} style={isAccessories ? { display: "block", marginTop: "28px" } : {}}>
            {list.map(({item, link}, id) => (
              <li key={id}>
                <Link onClick={()=> setIsMenu(false)} href={link} className={styles.text}>{item}</Link>
              </li>
            ))}
          </ul>
        </li>
      ))}

      </ul>
      {/* transport */}
      <ul className={styles.list}>
        {transport.map(({title, link, list}, id) => (
        <li key={id}>
          <div style={{display: "flex", position: "relative"}}>
            <Link onClick={()=> setIsMenu(false)} href={link} className={styles.title}>{title}</Link>
            <svg style={isTransport ? { transform: "rotate( 0deg)" } : {}}
              onClick={transportArrow}
              className={styles.arrow}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 1024 1024">
              <path fill="#FAEEEE" d="M8.2 751.4c0 8.6 3.4 17.401 10 24.001c13.2 13.2 34.8 13.2 48 0l451.8-451.8l445.2 445.2c13.2 13.2 34.8 13.2 48 0s13.2-34.8 0-48L542 251.401c-13.2-13.2-34.8-13.2-48 0l-475.8 475.8c-6.8 6.8-10 15.4-10 24.2z" />
            </svg>
          </div>
          <ul className={styles.list_text} style={isTransport ? { display: "block", marginTop: "28px" } : {}}>
            {list.map(({item, link}, id) => (
              <li key={id}>
                <Link onClick={()=> setIsMenu(false)} href={link} className={styles.text}>{item}</Link>
              </li>
            ))}
          </ul>
        </li>
        ))}
        {/* textile */}
        {textile.map(({title, link, list}, id) => (
        <li key={id}>
          <div style={{display: "flex", position: "relative"}}>
            <Link onClick={()=> setIsMenu(false)} href={link} className={styles.title}>{title}</Link>
            <svg style={isTextile ? { transform: "rotate( 0deg)" } : {}}
              onClick={textileArrow}
              className={styles.arrow}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 1024 1024">
              <path fill="#FAEEEE" d="M8.2 751.4c0 8.6 3.4 17.401 10 24.001c13.2 13.2 34.8 13.2 48 0l451.8-451.8l445.2 445.2c13.2 13.2 34.8 13.2 48 0s13.2-34.8 0-48L542 251.401c-13.2-13.2-34.8-13.2-48 0l-475.8 475.8c-6.8 6.8-10 15.4-10 24.2z" />
            </svg>
          </div>
          <ul className={styles.list_text} style={isTextile ? { display: "block", marginTop: "28px" } : {}}>
            {list.map(({item, link}, id) => (
              <li key={id}>
                <Link onClick={()=> setIsMenu(false)} href={link} className={styles.text}>{item}</Link>
              </li>
            ))}
          </ul>
        </li>
        ))}
      {toys.map(({title, link, list}, id) => (
        <li key={id}>
          <Link onClick={()=> setIsMenu(false)} href={link} className={styles.title}>{title}</Link>
        </li>
        ))}
      {backpacks.map(({title, link, list}, id) => (
        <li key={id}>
          <Link onClick={()=> setIsMenu(false)} href={link} className={styles.title}>{title}</Link>
        </li>
        ))}
      </ul>
      <div>

        {/* icon */}
      <ul className={styles.list_icon}>
        {social.map(({icon, link}, id) => (
        <li key={id}>
          <Link href={link} className={styles.icon}>
            <Image 
                src={icon}
                alt="icon"
                priority={true}
                loading="eager"
              />
          </Link>
        </li>
      ))}

        <li>
          <div style={{position: "relative", cursor: "pointer"}}>
            <Image 
                src={language}
                alt="language"
                priority={true}
                loading="eager"
              />
          </div>
        </li>
        <li>
          <div style={{position: "relative", cursor: "pointer"}}>
            <Image 
                src={convenience}
                alt="convenience"
                priority={true}
                loading="eager"
              />
          </div>
        </li>
      </ul>
      {/* input */}
        <div style={{position: "relative", width: "224px", marginTop: "28px"}}>
          <svg style={{position: "absolute", right: "12px", top: "4px"}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15.5 14H14.71L14.43 13.73C15.4439 12.554 16.0011 11.0527 16 9.5C16 8.21442 15.6188 6.95772 14.9046 5.8888C14.1903 4.81988 13.1752 3.98676 11.9874 3.49479C10.7997 3.00282 9.49279 2.87409 8.23192 3.1249C6.97104 3.3757 5.81285 3.99477 4.90381 4.90381C3.99477 5.81285 3.3757 6.97104 3.1249 8.23192C2.87409 9.49279 3.00282 10.7997 3.49479 11.9874C3.98676 13.1752 4.81988 14.1903 5.8888 14.9046C6.95772 15.6188 8.21442 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="white"/>
          </svg>
          <input type="text" className={styles.input} placeholder="шукайте товари" />
        </div>
      </div>
    </div>
  );
}
