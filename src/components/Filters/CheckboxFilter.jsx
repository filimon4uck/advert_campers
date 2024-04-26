import React, { useState } from 'react';
import sprite from '../../images/sprite.svg';
import styles from './Filters.module.css';

const CheckboxFilter = ({ name, id, checked }) => {
  const [isChecked, setIsChecked] = useState(checked);
  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label
      className={`${styles.checkbox_filter} ${
        isChecked ? styles.checked : styles.unchecked
      }`}
    >
      <input
        type="checkbox"
        checked={isChecked}
        style={{ display: 'none' }}
        onChange={handleChange}
      />
      <span>
        <svg width={32} height={32}>
          <use href={sprite + `#icon-${id}`}></use>
        </svg>
      </span>
      <span>{name}</span>
    </label>
  );
};

export default CheckboxFilter;
