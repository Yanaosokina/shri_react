import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCinema, setGenre } from '@/redux/slice/filterSlice';
import FindName from './FindName.jsx';
import styles from '../../css/find.module.css';
import Filter from './Filter.jsx';

function FindBlock({ genres, cinemas }) {
  const dispatch = useDispatch();
  const findGenre = useSelector((state) => state.filter.genre);
  const findCinema = useSelector((state) => state.filter.cinema);

  const handleGenreClick = (genre) => {
    dispatch(setGenre(genre));
    // setGenreValue(genre);
  };

  const handleCinemaClick = (cinemaName) => {
    dispatch(setCinema(cinemaName));
    // setCinemaValue(cinemaName);
  };

  return (
    <div className={styles.find}>
      <div className={styles.container}>
        <h4>Фильтр поиска</h4>
        <div className={styles.find_block}>
          <div className={styles.find_name}>
            <FindName />
          </div>
          <div className={styles.find_more}>
            <Filter name='Жанр' options={genres} value={findGenre} onChange={handleGenreClick} />
            <Filter
              name='Кинотеатр'
              options={cinemas.map((c) => c.name)}
              value={findCinema}
              onChange={handleCinemaClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindBlock;
