import style from './Filters.module.css';
import sprite from '../../images/sprite.svg';
const RadioFilter = ({ id, name, checked, onChange }) => {
  return (
    <label
      htmlFor={id}
      className={`${style.types_item} ${style.radio_filter_label} ${
        checked ? style.checked : ''
      }`}
    >
      <div className={style.name_icon_wrapper}>
        <input
          className={`${style.radio_filter_input} `}
          type="radio"
          id={id}
          value={id}
          name="filterOptions"
          checked={checked}
          onChange={onChange}
        />
        <svg width={40} height={28}>
          <use href={sprite + `#icon-${id}`}></use>
        </svg>
        <span>{name}</span>
      </div>
    </label>
  );
};
export default RadioFilter;
