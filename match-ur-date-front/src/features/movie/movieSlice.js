import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'initial'
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    changeMovie: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeMovie } = movieSlice.actions;

export const selectMovie = (state) => state.movie.value;

export default movieSlice.reducer;
