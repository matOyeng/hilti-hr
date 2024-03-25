'use client'

import React from 'react'
import styles from './sidebar.module.css';
import { title } from 'process';
import { list } from 'postcss';
import { RxDashboard } from "react-icons/rx";
import { FaUserTie } from "react-icons/fa";
import { CiViewBoard } from "react-icons/ci";
import { FaRegClipboard } from "react-icons/fa6";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { IoSettingsOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import MenuLink from './menuLink/menulink';

const menuItems = [
    {
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <RxDashboard />,
            },
            {
                title: "Job Board",
                path: "/dashboard/jobBoard",
                icon: <CiViewBoard />,
            },
            {
                title: "Job Posted",
                path: "/dashboard/jobPosted",
                icon: <FaRegClipboard />,
            },
            {
                title: "Employees",
                path: "/dashboard/employees",
                icon: <FaUserTie />,
            },
        ]
    }
]

const SideBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.logo}>
                    <Image src="/logo.png" alt="" width="210" height="70" /></div>
                <ul className={styles.list}>
                    {menuItems.map((cat, index) => (
                        <li key={index}>
                            {cat.list.map((item) => (
                                <MenuLink item={item} key={item.title} />
                            ))}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.bottom}>
                <div className={styles.setting}>
                    <IoSettingsOutline />Setting
                </div>
                <div className={styles.logout}>
                    <BiLogOut />Log Out
                </div>
            </div>
        </div>
    )
}

export default SideBar
