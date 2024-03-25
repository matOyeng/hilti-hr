import React from 'react';
import Link from 'next/link';
import styles from "./menulink.module.css";
import { usePathname } from 'next/navigation';

// Define a type or interface for the item object
interface MenuItem {
    title: string;
    path: string;
    icon: JSX.Element; // Adjust this based on the actual type of icon
    // Add more properties if needed
}

const MenuLink: React.FC<{ item: MenuItem }> = ({ item }) => {
    const pathname = usePathname();

    console.log(pathname)

    return (
        <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`}>
            {item.icon}
            {item.title}
        </Link>
    );
}

export default MenuLink;
