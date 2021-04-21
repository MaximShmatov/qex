import { configureStore,  } from '@reduxjs/toolkit';
import authForm from '../components/AuthForm/authFormSlice';

const store = configureStore({
  reducer: {
    authForm,
  },
});

export default store;