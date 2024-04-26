import Raiting from 'components/Rating/Raiting';
import style from './Reviews.module.css';

const Reviews = ({ reviews }) => {
  return (
    <div className={style.reviews}>
      <ul className={style.reviews_list}>
        {reviews.map(({ reviewer_name, reviewer_rating, comment }, idx) => (
          <li key={idx} className={style.reviews_item}>
            <span className={style.reviews_head}>
              <span className={style.first_letter_container}>A</span>
              <span className={style.name_raiting_container}>
                <p className={style.reviewer_name}>{reviewer_name}</p>
                <span>
                  <Raiting raiting={reviewer_rating} />
                </span>
              </span>
            </span>
            <p className={style.reviews_comment}>{comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Reviews;
