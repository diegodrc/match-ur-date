import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import telaReducer from '../features/tela/telaSlice';
import movieReducer from '../features/movie/movieSlice';
import genresReducer from '../features/genres/genresSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tela: telaReducer,
    movie: movieReducer,
    genres: genresReducer
  },
});
