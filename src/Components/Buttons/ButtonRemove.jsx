import React from 'react';
import styles from '../../css/button.module.css';

export default function ButtonRemove({ onClick }) {
  return (
    <button className={`${styles.button} ${styles.button_remove}`} onClick={onClick}>
            -
    </button>
  )
};
