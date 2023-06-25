import React from 'react';
import styles from '../../../css/moviepage.module.css';
import ReviewCard from './ReviewCard.jsx';


export default function Review({reviews}) {
  return (
    <div className={styles.reviews} >
        {
            reviews.map ((review, index) => (
                <ReviewCard 
                key={index}
                name={review.name}
                text={review.text}
                rating={review.rating}

                />
            ))

        }
    </div>
  )
}
