import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.sass';

function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} alt="logotype" src="logo150.png"/>
      <nav className={styles.nav}>
        <ul className={styles.nav__items}>
          <li className={styles.nav__item}>
            <Link className={styles.nav__ref} to="/">Home</Link>
          </li>
          <li className={styles.nav__item}>
            <Link className={styles.nav__ref} to="news">News</Link>
          </li>
          <li className={styles.nav__item}>
            <Link className={styles.nav__ref} to="profile">Profile</Link>
          </li>
          <li className={styles.nav__item}>
            <Link className={styles.nav__ref} to="signin">Sign In</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;