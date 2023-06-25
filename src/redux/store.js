import { configureStore } from '@reduxjs/toolkit';
import filter from './slice/filterSlice.jsx';
import cart from './slice/cartSlice.jsx';
import currentMovie from './slice/movieSlice.jsx';


export const store = configureStore({
  reducer: {
      filter,
      cart,
      currentMovie,
  }
})