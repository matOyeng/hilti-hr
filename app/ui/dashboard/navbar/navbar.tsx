'use client'

import React from 'react'
import styles from './navbar.module.css';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const NavBar = () => {
  const pathname = usePathname()
  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.user}>
        <Image className={styles.userImage} src="/aqil.png" alt="" width="50" height="50"></Image>
        <div className={styles.userDetail}>
          <span className={styles.username}>Aqil</span>
          <span className={styles.userTitle}>Developer</span>
        </div>
      </div>
    </div>
  )
}

export default NavBar
