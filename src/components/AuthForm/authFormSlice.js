import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  processMessage: '',
};

const sliderSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

    setIsAuth(state, action) {
      state.isAuth = action.payload;
    },

    setProcessMessage(state, action) {
      state.processMessage = action.payload;
    },

  },
});

export const { setIsAuth, setProcessMessage } = sliderSlice.actions;
export default sliderSlice.reducer;