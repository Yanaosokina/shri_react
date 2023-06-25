import React from 'react';
import styles from '../../css/button.module.css';

export default function ButtonAdd({onClick}) {
  return (
    <button className={`${styles.button} ${styles.button_add}`}  onClick={onClick}>
            +
          </button>
  )
}
