import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'initial'
};

export const telaSlice = createSlice({
  name: 'tela',
  initialState,
  reducers: {
    changeTela: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeTela } = telaSlice.actions;

export const selectTela = (state) => state.tela.value;

export default telaSlice.reducer;
