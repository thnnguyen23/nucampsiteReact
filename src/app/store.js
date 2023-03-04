import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
import { campsiteReducer } from '../features/campsites/campsitesSlice';

export const store = configureStore({
  reducer: {
    campsites: campsiteReducer,
  },
});
