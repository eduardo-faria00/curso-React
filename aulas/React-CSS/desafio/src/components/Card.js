import styles from './Card.module.css'
import React from 'react'

function Card({car}) {
  return (
    <div className={styles.card}>
        <h2>{car.name}</h2>
        <p>km: {car.km}</p>
        <p>cor: {car.color}</p>
    </div>
  )
}

export default Card