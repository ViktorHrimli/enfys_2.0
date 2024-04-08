import styles from './advantages.module.scss';

const cardTitle = "Особливості і переваги коляски 2 в 1 CARRELLO EPICA:"
const cardText = [
  {
    text : "Розміри в складеному вигляді: ширина - 57 см., Висота - 64 см., Товщина - 34 см"
  },
  {
    text: "Люлька: Простора люлька з ергономічною ручкою для перенесення."
  },
  {
    text: "М'який матрацик."
  },
  {
    text: "Зручна тепла накидка на ніжки."
  },
  {
    text: "Великий глибокий капюшон для захисту дитини від негоди."
  },
    {
    text : "Розміри в складеному вигляді: ширина - 57 см., Висота - 64 см., Товщина - 34 см"
  },
  {
    text: "Люлька: Простора люлька з ергономічною ручкою для перенесення."
  },
  {
    text: "М'який матрацик."
  },
  {
    text: "Зручна тепла накидка на ніжки."
  },
  {
    text: "Великий глибокий капюшон для захисту дитини від негоди."
  },
    {
    text : "Розміри в складеному вигляді: ширина - 57 см., Висота - 64 см., Товщина - 34 см"
  },
  {
    text: "Люлька: Простора люлька з ергономічною ручкою для перенесення."
  },
  {
    text: "М'який матрацик."
  },
  {
    text: "Зручна тепла накидка на ніжки."
  },
  {
    text: "Великий глибокий капюшон для захисту дитини від негоди."
  },
]

export default function Advantages() { 
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{cardTitle}</h2>
        <ul>
          {cardText.map(({ text }, id) => (
          <li key={id} className={styles.item}>
            <div className={styles.marker}></div>
            <p className={styles.text}>{text}</p>
          </li>
          ))}
        </ul>
      </div>
    </section>
  )
}