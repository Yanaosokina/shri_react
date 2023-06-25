'use client';
import React from 'react';
import styles from '../../css/faq.module.css';
import Answers from '../../Components/QandA/Answers.jsx';

export default function FAQ() {
  const faqData = [
    {
      question: 'Что такое Билетпоиск',
      answer:
        'Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.',
    },
    { question: 'Что Какой компании принадлежит Билетопоиск?', answer: 'We dont know yet' },
    { question: 'Как купить билет на Билетопоиск?', answer: 'Buy here' },
    {
      question: 'Как оставить отзыв на Билетопоиск?',
      answer: ' You cannot',
    },
  ];
  return (
    <div className={styles.faq}>
      <div className={styles.header}>Вопросы и ответы</div>
      <div className={styles.questions}>
        {faqData.map((faq, index) => (
          <Answers key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}
