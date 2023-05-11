import Link from "next/link";
import React, { FC } from "react";
import { useRouter } from "next/router";

import styles from './header.module.scss'

const Header: FC = () => {
const{pathname} = useRouter();
  return (
    <header className={styles.header}>
      <div className={styles.container}>
      <Link href="/" className={pathname === '/' ? styles.isActive : styles.headerNavTextColor}>
        <span >
        Головна
        </span>        
        </Link>
      <Link href="/contacts" className={pathname === '/contacts' ? styles.isActive :  styles.headerNavTextColor}>Контакти</Link>
      </div>
     
    </header>
  );
};

export default Header;
