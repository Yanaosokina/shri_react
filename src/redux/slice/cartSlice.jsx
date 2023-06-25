import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  movies: {},
  total: 0,
  moviesArray: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setAddition(state, action) {
      const { movieId } = action.payload;
      if (state.movies[movieId]) {
        if (state.movies[movieId].count < 30) {
          state.movies[movieId].count += 1;
          state.total += 1;
        }
      } else {
        state.movies[movieId] = { count: 1 };
        state.total +=1
      }

    },
    setReducing(state, action) {
      const { movieId } = action.payload;
      if (state.movies[movieId] && state.movies[movieId].count > 0) {
        state.movies[movieId].count -= 1;
        state.total -= 1;
      }
    },
    addMovieToArray(state, action) {
      const { movieId, title, genre, image } = action.payload;
      const movie = state.movies[movieId];
      if (movie) {
        const movieIndex = state.moviesArray.findIndex((item) => item.title === title);
        if (movieIndex !== -1) {
          state.moviesArray[movieIndex].count = movie.count;
        } else {
          state.moviesArray.push({
            title,
            movieId,
            genre,
            image,
            count: movie.count,
          });
        }
      }
    },
    removeMovieFromArray(state, action) {
      const { movieId, title, genre, image } = action.payload;
      const movie = state.movies[movieId];
      if (movie) {
        const movieIndex = state.moviesArray.findIndex((item) => item.title === title);
        if (movieIndex !== -1) {
          state.moviesArray[movieIndex].count = Math.max(0, movie.count);
        } else {
          state.moviesArray.push({
            title,
            movieId,
            genre,
            image,
            count: Math.max(0, movie.count - 1),
          });
        }
      }
    },
    removeMovieById(state, action) {
      const { movieId } = action.payload;
      const movie = state.movies[movieId];
      if (movie) {
        state.total -= movie.count;
        delete state.movies[movieId];
        state.moviesArray = state.moviesArray.filter((movie) => movie.movieId !== movieId);
      }
    },
  },
});

export const {
  setAddition,
  setReducing,
  addMovieToArray,
  removeMovieFromArray,
  removeMovieById,
} = cartSlice.actions;

export default cartSlice.reducer;
