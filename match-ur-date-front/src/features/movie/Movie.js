import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeMovie,
  selectMovie,
} from './movieSlice';
import styles from './Movie.module.css';

export function Movie() {
  const movie = useSelector(selectMovie);
  const dispatch = useDispatch();
  const [movieName, setMovieName] = useState('movie-inicial');

  return (
    <div>
      <div className={styles.row}>
        <span className={styles.value}>{movie}</span>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set movie name"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(changeMovie(movieName))}
        >
          Mudar movie
        </button>
      </div>
    </div>
  );
}
