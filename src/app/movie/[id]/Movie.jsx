import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setAddition,
  setReducing,
  addMovieToArray,
  removeMovieFromArray,
  removeMovieById,
} from '@/redux/slice/cartSlice';

import styles from '../../../css/moviepage.module.css';
import ButtonRemove from '../../../Components/Buttons/ButtonRemove.jsx';
import ButtonAdd from '../../../Components/Buttons/ButtonAdd.jsx';

export default function Movie({
  title,
  id,
  genre,
  image,
  releaseYear,
  description,
  rating,
  director,
  count,
}) {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.cart.movies);

  const onRemoveMovie = () => {
    dispatch(setReducing({ movieId: id }));
    dispatch(removeMovieFromArray({ movieId: id, title, genre, image }));
  };

  const onAddMovie = () => {
    dispatch(setAddition({ movieId: id }));
    dispatch(addMovieToArray({ movieId: id, title, genre, image }));
  };

  return (
    <div className={styles.movie_container}>
      <img src={image} alt='image' className={styles.image} />
      <div className={styles.movie_block}>
        <h3>{title}</h3>
        <p>
          <b>Жанр: </b>
          {genre}
        </p>
        <p>
          <b>Год выпуска: </b>
          {releaseYear}
        </p>
        <p>
          <b>Рейтинг: </b>
          {rating}
        </p>
        <p>
          <b>Режисер: </b>
          {director}
        </p>
        <div className={styles.description}>
          <h3>Описание</h3>
          <p>{description}</p>
        </div>
      </div>

      <div className={styles.add_to_cart}>
        <ButtonRemove onClick={onRemoveMovie} />
        <p>{count}</p>
        <ButtonAdd onClick={onAddMovie} />
      </div>
    </div>
  );
}
