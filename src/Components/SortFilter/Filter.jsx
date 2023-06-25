import React, { useState } from 'react';
import styles from '../../css/find.module.css';

import DropDown from './DropDown.jsx';
import ArrayUpDown from '../ArrayUpDown.jsx';

export default function Filter({ name, options, onChange, value }) {
  const [arrDown, setArrayDown] = useState(true);

  const handleClick = () => {
    setArrayDown(!arrDown);
  };

  return (
    <>
      <div className={styles.find_block}>
        <div className={styles.name}>{name}</div>
        <div
          className={`${styles.find_line} ${arrDown ? ' ' : styles.activeFind}`}
          onClick={handleClick}
        >
          {value ? value : `Выберите ${name.toLowerCase()}`}
          <ArrayUpDown arrDown={arrDown} />
        </div>
      </div>
      {!arrDown && (
        <div className={styles.dropDown}>
          <DropDown
            options={options}
            onClick={(val) => {
              onChange(val);
              setArrayDown(!arrDown);
            }}
          />
        </div>
      )}
    </>
  );
}
