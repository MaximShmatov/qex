import React from 'react';
import Button from '../../components/Button/Button';
import styles from './SearchForm.module.sass';


export default function SearchForm({ onSubmit }) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        className={styles.input}
        name={'search'}
        type={'text'}
        placeholder={'Enter Keyword'}
      />
      <Button type={'submit'}>
        Search
      </Button>
    </form>
  );
}