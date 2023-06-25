'use client';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import FindBlock from '../Components/SortFilter/FindBlock.jsx';
import MoviesList from '../Components/MoviesList/MoviesList.jsx';
import { fetchCinemas, fetchMovies } from '../Fetch/fetchData.js';
import styles from '../css/cinema.module.scss';

function Cinemas() {
  const genreValue = useSelector((state) => state.filter.genre);
  const findCinema = useSelector((state) => state.filter.cinema);
  const findMovie = useSelector((state) => state.filter.name);

  const [genres, setGenres] = useState([]);
  const [cinemas, setCinemas] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [movies, cinemas] = await Promise.all([fetchMovies(), fetchCinemas()]);
        setMovies(movies);
        setGenres(['Не выбран', ...Array.from(new Set(movies.map((movie) => movie.genre)))]);
        setCinemas(cinemas);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }

    fetchData();
  }, []);

  

  function getFilteredMovies(movies, genreValue, findCinema, findMovie) {
    if (genreValue || findCinema || findMovie) {
      const filteredCinema = cinemas.find((cinema) => cinema.name === findCinema);
      const movieIds = filteredCinema ? filteredCinema.movieIds : [];

      return movies.filter((movie) => {
        const isMovieMatch =
          findMovie !== '' ? movie.title.toLowerCase().includes(findMovie.toLowerCase()) : true;
        const isGenreMatch =
          genreValue !== ''
            ? genreValue === 'Не выбран'
              ? true
              : movie.genre === genreValue
            : true;
        const isCinemaMatch = findCinema !== '' ? movieIds.includes(movie.id) : true;
        return isGenreMatch && isCinemaMatch && isMovieMatch;
      });
    } else {
      return movies;
    }
  }

  let filteredMovies = getFilteredMovies(movies, genreValue, findCinema, findMovie);

  return (
    <div className={styles.main}>
      <FindBlock genres={genres} cinemas={cinemas} />
      <MoviesList movies={filteredMovies} />
    </div>
  );
}

export default Cinemas;
