import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  genre: '',
  cinema: '',
};
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setGenre(state, action) {
      state.genre = action.payload;
    },
    setCinema(state, action) {
      state.cinema = action.payload;
    },
  },
});
export const { setName, setGenre, setCinema } = filterSlice.actions;

export default filterSlice.reducer;
