import { configureStore } from '@reduxjs/toolkit';
import manageReducer from '../manage/store/manageSlice';
export const store = configureStore({
  reducer: {
    counter: manageReducer,
  },
});
