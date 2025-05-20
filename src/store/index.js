import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./slices/moviesSlice";
import bookingReducer from './slices/bookingSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    booking: bookingReducer,
  },
});