import React from 'react';
import MovieCard from './MoviesList/MovieCard';

export default function CartCard({ title, genre, image, count, dispatch, id }) {


  return (
    <MovieCard
      title={title}
      id={id}
      genre={genre}
      image={image}
      count={count}
      onRemoveMovie={() => dispatch(setReducing({ movieId: id }),removeMovieFromArray({ movieId: id, title, genre, image }))}
      onAddMovie={() => dispatch(setAddition({ movieId: id }), addMovieToArray({ movieId: id, title, genre, image }))}
      showDelete={true}
    />
  );
}
