import React from 'react';
import styles from '../../css/find.module.css';

export default function DropDown({ options, onClick }) {
  return (
    <div className={styles.dropdown_menu}>
      <ul>
        {options.map((option, index) => (
          <li key={index} onClick={() => onClick(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}
