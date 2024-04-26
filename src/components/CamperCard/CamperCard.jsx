import style from './CamperCard.module.css';
import sprite from '../../images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from 'store/modal/modalSlice';
import { toggleFavorites } from 'store/favorites/favoritesSlice';
import { selectFavorites } from 'store/selectors/selectors';
import { useEffect, useState } from 'react';
import FeaturesList from 'components/Shared/FeaturesList/FeaturesList';
import CamperStats from 'components/Shared/CamperStats/CamperStats';

const CamperCard = ({ camper }) => {
  const favorites = useSelector(selectFavorites);
  const checkFavorites = id => favorites.find(({ _id }) => _id === id);
  const [isInFavorites, setIsInFavorites] = useState(
    checkFavorites(camper._id)
  );
  const {
    _id,
    name,
    price,
    rating,
    location,
    adults,
    engine,
    transmission,
    description,
    details: { kitchen, beds, airConditioner },
    gallery,
    reviews,
  } = camper;
  const VALUES_WITH_COUNT = ['adults', 'beds'];
  const VALUES = ['transmission', 'engine'];
  const features = {
    adults,
    transmission,
    engine,
    kitchen,
    beds,
    AC: airConditioner,
  };
  useEffect(() => {
    setIsInFavorites(favorites.find(({ _id }) => _id === camper._id));
  }, [favorites, camper]);
  const dispatch = useDispatch();
  return (
    <div className={style.card_container}>
      <div className={style.camper_picture_container}>
        <img src={gallery[0]} alt="picture_camper" />
      </div>

      <div className={style.details_container}>
        <div className={style.card_head}>
          <p>{name}</p>
          <div className={style.price_favor_container}>
            <p>&euro;{price.toFixed(2)}</p>
            <button
              className={`${
                isInFavorites ? style.in_favorites : style.favorites_bth
              }`}
              type="button"
              onClick={() => dispatch(toggleFavorites(camper))}
            >
              <svg width={24} height={24}>
                <use href={sprite + '#icon-heart'}></use>
              </svg>
            </button>
          </div>
        </div>
        <CamperStats rating={rating} reviews={reviews} location={location} />
        <p className={style.description}>{description}</p>
        <FeaturesList
          features={features}
          valuesWithCount={VALUES_WITH_COUNT}
          values={VALUES}
        />
        <button
          className={style.show_more_btn}
          onClick={() => dispatch(openModal(_id))}
          type="button"
        >
          Show more
        </button>
      </div>
    </div>
  );
};
export default CamperCard;
