import { store } from '../store';
import { fetchMovies } from '../store/slices/moviesSlice';

export const moviesLoader = async () => {
  await store.dispatch(fetchMovies());
  const state = store.getState();
  return state.movies.movies; 
};