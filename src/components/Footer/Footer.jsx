import React from 'react';
import styles from './Footer.module.sass';
import items from './footer.json';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      &copy; 2017-2020 QEX, - системный интегратор решений автоматизации продаж
      <div className={styles.copyright}>
        {items.map(({ link, src, alt }) => (
          <a
            key={Math.random()}
            className={styles.copyright__link}
            href={link} target="_blank"
            rel="noopener noreferrer"
          >
            <img src={src} alt={alt} />
          </a>
        ))}
      </div>
    </footer>
  );
}