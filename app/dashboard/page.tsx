import React from 'react'
import styles from "../ui/dashboard/dashboard.module.css"
import Card from "../ui/dashboard/card/card"
import Progress from '../ui/dashboard/progress/progress'
import Chart from '../ui/dashboard/chart/chart'
import RightBar from '../ui/dashboard/rightBar/rightBar' 
import Acquisition from '../ui/dashboard/acquisition/acquisition'

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <Chart/>
        <div className={styles.bottom}>
        <Progress/>
        <Acquisition/>
        </div>
        </div>
        <div className={styles.side}>
        <RightBar/>
      </div>
    </div>
  )
}

export default Dashboard
