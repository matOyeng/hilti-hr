import React from 'react'
import styles from "./acquisition.module.css"

const Acquisition = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Acquisitions</h2>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td><li>Applications</li></td>
            <td></td>
            <td>80%</td>
          </tr>
          <tr>
            <td><li>Shortlisted</li></td>
            <td></td>
            <td>80%</td>
          </tr>
          <tr>
            <td><li>Rejected</li></td>
            <td></td>
            <td>80%</td>
          </tr>
          <tr>
            <td><li>Onhold</li></td>
            <td></td>
            <td>80%</td>
          </tr>
          <tr>
            <td><li>Selected</li></td>
            <td></td>
            <td>80%</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Acquisition
