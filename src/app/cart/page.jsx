'use client';

import React from 'react';
import styles from '../../css/cart.module.scss';
import CartCard from '../../Components/CartCard';
import { useSelector, useDispatch } from 'react-redux';

export default function Cart() {
  const movie = useSelector((state) => state.cart.moviesArray);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.cart}>
        {movie.map((movie, index) => (
          <CartCard
            key={index}
            id={movie.movieId}
            title={movie.title}
            count={movie.count}
            image={movie.image}
            genre={movie.genre}
            dispatch={dispatch}
          />
        ))}
      </div>
    </div>
  );
}
