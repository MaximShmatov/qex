import { configureStore,  } from '@reduxjs/toolkit';
import snackbar from './snackbarSlice';
import auth from './authSlice';
import news from './newsSlice';

const store = configureStore({
  reducer: {
    snackbar,
    auth,
    news,
  },
});

export default store;