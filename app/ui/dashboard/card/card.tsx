import React from 'react'
import { FiUsers } from "react-icons/fi";
import styles from "./card.module.css"

const Card = () => {
  return (
      <div className={styles.container}>
      <FiUsers />
      <div className={styles.text}>
        <span className={styles.title}>New Employees</span>
        <span className={styles.num}>21</span>
        <span className={styles.detail}>10% Inc from last month</span>
      </div>
    </div>
    
  )
}

export default Card
