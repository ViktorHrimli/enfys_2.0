import styles from './table-cards.module.scss'

export default function TableCards({ data, id }) {
  const keyId = id.params.id;
  const tableList = data[keyId].attributes.table;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Характеристики: {data[keyId].attributes.title}</h2>
        <ul className={styles.list}>
          {tableList.map(({ title, value }, id) => (
            <li key={id} className={styles.item}>
              <div className={styles.text}>
                {title}
              </div>
              <div className={styles.value}>
                {value}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}