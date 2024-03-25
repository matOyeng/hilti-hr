import React from 'react'
import Search from '@/app/ui/dashboard/search/search'
import styles from "@/app/ui/dashboard/jobBoard/jobBoard.module.css"
import Link from 'next/link'
import Image from 'next/image'
import {fetchJobBoard} from "@/lib/data"

const JobBoard = async () => {
  const jobs = await fetchJobBoard();
  console.log(jobs);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder='Search'/>
        <Link href="/dashboard/jobBoard/add">
          <button className={styles.button}>+ Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Job Title</td>
            <td>Published</td>
            <td>Closed</td>
            <td>Applicants</td>
            <td>Type</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Link href="/dashboard/jobBoard/list">Senior Java Developer</Link></td>
            <td>Nov 26, 2023</td>
            <td>Feb 26, 2023</td>
            <td>
              <div className={styles.user}>
                <Image 
                src="/aqil.png"
                alt=""
                width={40}
                height={40}
                className={styles.userImg}>
                </Image>
              25 Applicants
              </div>
            </td>
            <td><span className={`${styles.status} ${styles.fulltime}`}>Full Time</span></td>
          </tr>
          <tr>
          <td>Senior Java Developer</td>
            <td>Nov 26, 2023</td>
            <td>Feb 26, 2023</td>
            <td><div className={styles.user}>
                <Image 
                src="/aqil.png"
                alt=""
                width={40}
                height={40}
                className={styles.userImg}>
                </Image>
              25 Applicants
              </div>
              </td>
            <td><span className={`${styles.status} ${styles.fulltime}`}>Full Time</span></td>
          </tr>
          <tr>
          <td>Senior Java Developer</td>
            <td>Nov 26, 2023</td>
            <td>Feb 26, 2023</td>
            <td><div className={styles.user}>
                <Image 
                src="/aqil.png"
                alt=""
                width={40}
                height={40}
                className={styles.userImg}>
                </Image>
              25 Applicants
              </div>
              </td>
            <td><span className={`${styles.status} ${styles.parttime}`}>Part Time</span></td>
          </tr>
          <tr>
          <td>Senior Java Developer</td>
            <td>Nov 26, 2023</td>
            <td>Feb 26, 2023</td>
            <td><div className={styles.user}>
                <Image 
                src="/aqil.png"
                alt=""
                width={40}
                height={40}
                className={styles.userImg}>
                </Image>
              25 Applicants
              </div>
              </td>
            <td><span className={`${styles.status} ${styles.contract}`}>Contract</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default JobBoard
