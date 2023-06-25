import React from 'react';
import styles from '../../css/footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Link href='/faq'>Вопросы и ответы</Link>
      <Link href='/about-us'>О нас</Link>
    </div>
  );
}
