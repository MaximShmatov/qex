import React from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';
import styles from './SignIn.module.sass';

export default function SignIn() {
  return (
    <main className={styles.signin}>
      <AuthForm />
    </main>
  );
}