import sprite from '../../../images/sprite.svg';
import React from 'react';
import style from './FeaturesList.module.css';

export default function FeaturesList({ features, valuesWithCount, values }) {
  const setCapitalizeValue = value => {
    return value[0].toUpperCase() + value.slice(1);
  };

  return (
    <ul className={style.features_list}>
      {Object.entries(features).map(([key, value], idx) => {
        let valueToRender;
        if (valuesWithCount.includes(key)) {
          valueToRender = `${value} ${key}`;
        } else if (values.includes(key)) {
          valueToRender = setCapitalizeValue(value);
        } else {
          if (!value) return null;
          valueToRender = setCapitalizeValue(key);
        }
        return (
          <li key={idx} className={style.list_item}>
            <svg width={20} height={20}>
              <use href={`${sprite}#icon-${key}`}></use>
            </svg>
            {valueToRender}
          </li>
        );
      })}
    </ul>
  );
}
