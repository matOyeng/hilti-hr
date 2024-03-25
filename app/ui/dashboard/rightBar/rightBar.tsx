import React from 'react'
import styles from "./rightBar.module.css"

const RightBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.texts}>
          <h3 className={styles.title}>
            New Version of Admin Dashboard
          </h3>
          <p className={styles.desc}>Minimalist and aesthetic</p>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.texts}>
          <h3 className={styles.title}>
            Coming Soon
          </h3>
          <p className={styles.desc}>More to upgrade</p>
        </div>
      </div>
    </div>
  )
}

export default RightBar
