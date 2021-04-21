import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAuth } from './authFormSlice';
import { Redirect } from 'react-router-dom';
import styles from './AuthForm.module.sass';


export default function AuthForm() {
  const [credentials, setCredentials] = useState({login: '', password: ''});
  const isAuth = useSelector(({ authForm }) => authForm.isAuth);
  const dispath = useDispatch();
  const handleHelpClick = () => {
    setCredentials({login: 'admin', password: 'admin'});
  };
  const handleLoginClick = (evt) => {
    evt.preventDefault();
    const formLogin = document.forms.auth.elements.login.value;
    const formPassword = document.forms.auth.elements.password.value;
    const { login, password } = window.credentials;
    dispath(setIsAuth(formLogin === login && formPassword === password));
  };

  return isAuth ? <Redirect to="/profile" /> : (
    <form className={styles.form} name="auth">
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>
          Sign In
        </legend>
        <input
          className={styles.login}
          type="text"
          name="login"
          defaultValue={credentials.login}
          placeholder="User Name" />
        <input
          className={styles.password}
          type="password"
          name="password"
          defaultValue={credentials.password}
          placeholder="Password" />
        <label className={styles.remember}>
          <input
            className={styles.remember__checkbox}
            type="checkbox"
            name="save"
          />
          Remember Me
        </label>
        <button
          className={styles.signin}
          type="submit"
          onClick={handleLoginClick}
        >
          Sign In
        </button>
        <input
          className={styles.help}
          type="button"
          onClick={handleHelpClick}
          value="&#128712; Lost Password ?"
        />
      </fieldset>
    </form>
  );
}
