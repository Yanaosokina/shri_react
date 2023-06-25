import React from 'react';
import styles from '../../css/header.module.css';
import cart from '../../Icons/basket.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';

function Header() {
  const total = useSelector((state) => state.cart.total);

  return (
    <div className={styles.header}>
      <Link href='/'>
        <div className={styles.logo}>Билетпоиск</div>
      </Link>

      <div className={styles.cart}>
        <Link href='/cart' className={styles.cart_link}>
          {total > 0 && (
            <div className={styles.cart_notempty}>
              <p>{total}</p>
            </div>
          )}

          <Image src={cart} alt='cart' width={24} height={24} />
        </Link>
      </div>
    </div>
  );
}

export default Header;
