import React, {  useRef, useState } from 'react';
import styles from '../../css/find.module.css';
import {  useDispatch } from 'react-redux';
import { setName } from '@/redux/slice/filterSlice';

function FindName() {
  const dispatch = useDispatch();

  const [value, setValue] = useState('');
  const inputRef = useRef();

  const onChangeInput = (e) => {
    setValue(e.target.value);
    dispatch(setName(e.target.value));
  };

  return (
    <div className={styles.root}>
      <div className={styles.name}>Название</div>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder='Введите название'
      ></input>
    </div>
  );
}

export default FindName;
