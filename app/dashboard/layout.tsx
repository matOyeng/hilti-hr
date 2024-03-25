import React from 'react'
import SideBar from '../ui/dashboard/sidebar/sidebar';
import NavBar from '../ui/dashboard/navbar/navbar';
import styles from '../ui/dashboard/dashboard.module.css';

const Layout = ({children,
}: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <SideBar/>
      </div>
      <div className={styles.content}>
        <NavBar/>
        {children}
      </div>
    </div>
  )
}

export default Layout
