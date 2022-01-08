import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {}
};

export const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    setGenres: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setGenres } = genresSlice.actions;

export const selectGenres = (state) => state.genres.value;

export default genresSlice.reducer;
