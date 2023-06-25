import React from 'react';

import Image from 'next/image';
import arr from '../Icons/arrow-down.svg';
import arrUp from '../Icons/arrow-up.svg';
import styles from '../css/find.module.css';

export default function ArrayUpDown({arrDown}) {
  return (
    <div className={styles.dropdown_toggle_icon}>
    <Image src={arrDown ? arr : arrUp} alt='array' />
  </div>
  )
}
