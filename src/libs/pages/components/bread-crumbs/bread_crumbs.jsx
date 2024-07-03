import styles from './bread_crumbs.module.scss';
import { slugify } from 'transliteration';



export default function BreadCrumbs({ data }) { 
  const pageName = data[0]?.attributes.group;
  const link = slugify(pageName);
  
  const pageTitle = data[0]?.attributes.title.toUpperCase();

  return (
    <section className={styles.section}> 
      <div className={styles.container}>
        <div className={styles.link}>
          <p className={styles.content}> 
          <a href={`/${link}`}>
            {pageName}
          </a>
            <span className={styles.svg_container}>
            <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 1024 1024"><path fill="currentColor" d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8l-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0" /></svg>
            </span>
            {pageTitle}
            </p>
        </div>
      </div>
    </section>
  )
}