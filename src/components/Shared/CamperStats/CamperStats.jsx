import sprite from '../../../images/sprite.svg';
import style from './CamperStats.module.css';
const CamperStats = ({ rating, reviews, location }) => {
  return (
    <div className={style.stats_container}>
      <span className={style.reviews_container}>
        <svg width={16} height={16} className={style.reviews_icon}>
          <use href={sprite + '#icon-star'}></use>
        </svg>
        {rating}({reviews.length} Reviews)
      </span>
      <span className={style.location_container}>
        <svg width={16} height={16}>
          <use href={sprite + '#icon-location'}></use>
        </svg>
        {location}
      </span>
    </div>
  );
};
export default CamperStats;
