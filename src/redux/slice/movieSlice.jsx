import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentMovie: 'yana'
};

const movieSlice = createSlice({
  name: 'currentMovie',
  initialState,
  reducers: {
    setCurrentMovie(state, action) {
        state.currentMovie = action.payload;
    },

  },
});
export const { setCurrentMovie } = movieSlice.actions;

export default movieSlice.reducer;
