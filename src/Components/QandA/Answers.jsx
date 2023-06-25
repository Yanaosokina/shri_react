import ArrayUpDown from '@/Components/ArrayUpDown';
import React, { useState } from 'react';
import styles from '../../css/faq.module.css';

export default function Answers({ question, answer }) {
  const [array, setArray] = useState(false);
  const handlQuestionClick = () => {
    setArray(!array);
  };
  return (
    <>
      <div className={styles.question} onClick={handlQuestionClick}>
        {question}
        <ArrayUpDown arrDown={array} />
        
      </div>
      {array && <div className={styles.answers}>{answer}</div>}
    </>
  );
}
