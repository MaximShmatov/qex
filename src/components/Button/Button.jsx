import React from 'react';
import styles from './Button.module.sass';


export default function Button({ type, children, onClick, className = ''}) {
  return (
    <button
      className={`${styles.button} ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}