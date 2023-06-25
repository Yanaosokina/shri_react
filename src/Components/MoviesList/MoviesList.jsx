import React from 'react';
import styles from '../../css/movies.module.css';
import MovieCard from './MovieCard.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { setAddition, setReducing } from '@/redux/slice/cartSlice';

function MoviesList({ movies }) {
  const dispatch = useDispatch();
  const moviesCount = useSelector((state) => state.cart.movies);

  const handleAddTicket = (movieId) => {
    dispatch(setAddition({ movieId }));
  };

  const handleRemoveTicket = (movieId) => {
    dispatch(setReducing({ movieId }));
  };

  return (
    <div className={styles.movies_container}>
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          title={movie.title}
          genre={movie.genre}
          image={movie.posterUrl}
          id = {movie.id}
          count={moviesCount[movie.id] ? moviesCount[movie.id].count : 0}
          onClickAddTicket={() => handleAddTicket(movie.id)}
          onClickRemoveTicket={() => handleRemoveTicket(movie.id)}
          showDelete={false}
        />
      ))}
    </div>
  );
}

export default MoviesList;
