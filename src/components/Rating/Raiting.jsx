import sprite from '../../images/sprite.svg';
import style from './Raiting.module.css';
const Raiting = ({ raiting }) => {
  return (
    <ul className={style.raiting_list}>
      {Array.from({ length: 5 }, (_, index) => (
        <li
          key={index}
          className={`${style.raiting_star} ${
            index + 1 <= raiting ? style.raiting_star_filled : ''
          }`}
        >
          <svg width={16} height={16}>
            <use href={sprite + '#icon-star'}></use>
          </svg>
        </li>
      ))}
    </ul>
  );
};
export default Raiting;
