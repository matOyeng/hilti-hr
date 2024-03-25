import React from 'react'
import styles from "./progress.module.css"

const Progress = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Interview Progress</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Position</td>
            <td>Interview Stage</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Zul Akmal</td>
            <td>Backend Developer</td>
            <td><span className={`${styles.status} ${styles.leader}`}>Leadership</span></td>
          </tr>
          <tr>
            <td>Haris Azhari</td>
            <td>Backend Developer</td>
            <td><span className={`${styles.status} ${styles.tech}`}>Technical</span></td>
          </tr>
          <tr>
            <td>Zulkarnain</td>
            <td>Backend Developer</td>
            <td><span className={`${styles.status} ${styles.final}`}>Final</span></td>
          </tr>
          <tr>
            <td>Zaharudin Hamid</td>
            <td>Backend Developer</td>
            <td><span className={`${styles.status} ${styles.leader}`}>Leadership</span></td>
          </tr>
          <tr>
            <td>Iven Roy</td>
            <td>Backend Developer</td>
            <td><span className={`${styles.status} ${styles.leader}`}>Leadership</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Progress
