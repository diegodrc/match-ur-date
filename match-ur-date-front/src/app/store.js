import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import telaReducer from '../features/tela/telaSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tela: telaReducer
  },
});
