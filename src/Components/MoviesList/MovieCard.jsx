import React, { useState } from 'react';
import styles from '../../css/movies.module.css';
import ButtonRemove from '../Buttons/ButtonRemove.jsx';
import ButtonAdd from '../Buttons/ButtonAdd.jsx';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import {
  setAddition,
  setReducing,
  addMovieToArray,
  removeMovieFromArray,
  removeMovieById,
} from '@/redux/slice/cartSlice';

function MovieCard({ title, id, genre, image, count, showDelete }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleRemoveMovie = () => {
    dispatch(removeMovieById({ movieId: id }));
    closeModal();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.movie_card}>
      <div className={styles.container}>
        <Link href={`/movie/${id}`}>
          <div className={styles.movie}>
            <img className={styles.image} src={image} alt='Movie' />
            <div className={styles.about}>
              <h1>{title}</h1>
              <p>{genre}</p>
            </div>
          </div>
        </Link>
        <div className={styles.add_to_cart}>
          <ButtonRemove onClick={onRemoveMovie} />
          <p>{count}</p>
          <ButtonAdd onClick={onAddMovie} />
          {showDelete && (
            <div className={styles.exit} onClick={openModal}>
              x
            </div>
          )}
        </div>
      </div>
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modal_content}>
            <span className={styles.close} onClick={closeModal}>
              &times;
            </span>
            <h3>Удаление билета</h3>
            <p>Вы уверены, что хотите удалить билет?</p>
            <button
              className={`${styles.confirm_button} ${styles.modal_button}`}
              onClick={handleRemoveMovie}
            >
              {' '}
              Да{' '}
            </button>
            <button
              className={`${styles.cancel_button} ${styles.modal_button}`}
              onClick={closeModal}
            >
              Нет
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieCard;
