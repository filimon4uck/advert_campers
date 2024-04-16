import style from './CamperCard.module.css';
import sprite from '../../images/sprite.svg';
import { useDispatch } from 'react-redux';
import { openModal } from 'store/modal/modalSlice';
import { toggleFavorites } from 'store/favorites/favoritesSlice';
const CamperCard = ({ camper }) => {
  const {
    _id,
    name,
    price,
    rating,
    location,
    adults,
    children,
    engine,
    transmission,
    form,
    length,
    width,
    height,
    tank,
    consumption,
    description,
    details,
    gallery,
    reviews,
  } = camper;
  const dispatch = useDispatch();
  return (
    <div className={style.card_container}>
      <div className={style.camper_picture_container}>
        <img
          className={style.camper_picture}
          src={gallery[0]}
          alt="picture_camper"
        />
      </div>
      <div>
        <div>
          <div className={style.card_head}>
            <p>{name}</p>
            <p>${price.toFixed(2)}</p>
          </div>
          <p>
            <svg width={16} height={16}>
              <use href={sprite + '#star'}></use>
            </svg>{' '}
            {rating}({reviews.length} Reviews)
            <span>{location}</span>
          </p>
          <p className={style.description}>{description}</p>
        </div>
        <ul className={style.details}>
          <li>{adults} adults</li>
          <li>{transmission}</li>
          <li>{engine}</li>
          {details.kitchen > 0 && <li>Kitchen</li>}
          {details.beds > 0 && <li>{details.beds} beds</li>}
          {details.airConditioner > 0 && <li>AC</li>}
        </ul>
        <button
          className={style.show_more_btn}
          onClick={() => dispatch(openModal(_id))}
          type="button"
        >
          Show more
        </button>
        <button onClick={() => dispatch(toggleFavorites(camper))} type="button">
          Ad to Favorites
        </button>
      </div>
    </div>
  );
};
export default CamperCard;
