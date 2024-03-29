import Link from "next/link";
import React, { FC } from "react";
import { useRouter } from "next/router";

import styles from "./header.module.scss";

const Header: FC = () => {
  const { pathname } = useRouter();
  return (
    <header className={styles.header}>
      <div className="container flex justify-around items-center lg:space-between ">
        <Link href="/" passHref>
          <span
            className={`lg:text-2xl	${
              pathname === "/" ? styles.isActive : styles.headerNavTextColor
            } 
`}
          >
            Головна
          </span>
        </Link>
        <Link href="/contacts" passHref>
          <span
            className={
              pathname === "/contacts"
                ? styles.isActive
                : styles.headerNavTextColor
            }
          >
            Контакти
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
