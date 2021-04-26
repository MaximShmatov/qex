import React from 'react';
import styles from './Index.module.sass';


export default function Index() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Index Page</h1>
      <img alt="react logotype" src="react.svg"/>
    </main>
  );
}