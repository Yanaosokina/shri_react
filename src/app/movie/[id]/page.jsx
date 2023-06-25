'use client';
import React, { useState, useEffect } from 'react';
import styles from '../../../css/moviepage.module.css';
import { fetchMovies } from '../../../Fetch/fetchData.js';
import Movie from './Movie';
import Review from './Review';
import { useSelector } from 'react-redux';

export default function AboutMovie({ params }) {
  const { id } = params;
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);

  const moviesCount = useSelector((state) => state.cart.movies);

  useEffect(() => {
    async function fetchData() {
      try {
        const moviesData = await fetchMovies();
        const response = await fetch(`http://localhost:3001/api/reviews?movieId=${id}`);
        const reviewsData = await response.json();

        const foundMovie = moviesData.find((movie) => movie.id === id);
        setMovie(foundMovie);
        setReviews(reviewsData);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }

    fetchData();
  }, []);

  if (!movie) {
    return <div className={styles.spinner}>Loading...</div>;
  }

  return (
    <div className={styles.aboutmovie}>
      <div className={styles.movie}>
        <Movie
          title={movie.title}
          genre={movie.genre}
          image={movie.posterUrl}
          id={movie.id}
          director={movie.director}
          releaseYear={movie.releaseYear}
          description={movie.description}
          rating={movie.rating}
          count={moviesCount[movie.id] ? moviesCount[movie.id].count : 0}
        />
      </div>
      <div className={styles.revies}>
        <Review reviews={reviews} />
      </div>
    </div>
  );
}
