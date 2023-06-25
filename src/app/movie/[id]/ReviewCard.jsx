import React from 'react';
import styles from '../../../css/moviepage.module.css';
import picture from '../../../Icons/image.svg';

export default function ReviewCard({ name, text, rating }) {
  return (
  <div className={styles.review_block}>
      <img src={picture} alt='picture' />
      <div className={styles.user}>
          <p>{name}</p>
          <div>{text}</div>

      </div>

  </div>);
}
