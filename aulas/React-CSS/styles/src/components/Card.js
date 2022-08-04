import styles from './Card.module.css'

function Card() {
  return (
    <div className={styles.card}>
        <h1>Este é um card</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptatem maiores itaque quaerat.</p>
    </div>
  )
}

export default Card