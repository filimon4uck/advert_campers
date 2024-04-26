import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from 'store/modal/modalSlice';
import sprite from '../../images/sprite.svg';
import { selectAdverts, selectCardId } from 'store/selectors/selectors';
import Features from 'components/Features/Features';
import Reviews from 'components/Shared/Reviews/Reviews';
import style from './Modal.module.css';
import CamperStats from 'components/Shared/CamperStats/CamperStats';
import BookForm from 'components/BookForm/BookForm';

const Modal = () => {
  const [isFeaturesActive, setFeaturesActive] = useState(true);
  const [isReviewsActive, setReviewsActive] = useState(false);
  const dispatch = useDispatch();
  const cardId = useSelector(selectCardId);
  const adverts = useSelector(selectAdverts);
  const camper = adverts?.find(({ _id }) => cardId === _id);
  const { name, rating, reviews, location, price, gallery, description } =
    camper || {};

  useEffect(() => {
    const handleKeyPress = evt => {
      if (evt.code === 'Escape') {
        dispatch(closeModal());
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [dispatch]);

  const handleClickOverlay = evt => {
    if (evt.currentTarget === evt.target) {
      dispatch(closeModal());
    }
  };

  if (!camper) return null;

  return (
    <div className={style.overlay} onClick={handleClickOverlay}>
      <div className={style.modal}>
        <div className={style.modal_head}>
          <h2 className={style.name}>{name}</h2>
          <button
            className={style.close_button}
            type="button"
            onClick={() => dispatch(closeModal())}
          >
            <svg width={16} height={16}>
              <use href={sprite + '#icon-close'}></use>
            </svg>
          </button>
        </div>

        <CamperStats rating={rating} reviews={reviews} location={location} />
        <p className={`${style.price} ${style.name}`}>
          &euro;{price?.toFixed(2)}
        </p>
        <div className={style.images_container}>
          {gallery.map((image, index) => (
            <div className={style.image_container} key={index}>
              <img src={image} alt={`camper_image_${index}`} />
            </div>
          ))}
        </div>
        <p className={style.description}>{description}</p>
        <div className={style.features_reviews_container}>
          <ul className={style.buttons_list}>
            <li>
              <button
                className={`${style.modal_button} ${
                  isFeaturesActive ? style.active : ''
                }`}
                type="button"
                onClick={() => {
                  setFeaturesActive(true);
                  setReviewsActive(false);
                }}
              >
                Features
              </button>
            </li>
            <li>
              <button
                className={`${style.modal_button} ${
                  isReviewsActive ? style.active : ''
                }`}
                onClick={() => {
                  setFeaturesActive(false);
                  setReviewsActive(true);
                }}
                type="button"
              >
                Reviews
              </button>
            </li>
          </ul>

          {isFeaturesActive && (
            <div className={style.features_reviews_wrapper}>
              <Features camper={camper} /> <BookForm />
            </div>
          )}
          {isReviewsActive && (
            <div className={style.features_reviews_wrapper}>
              <Reviews reviews={reviews} /> <BookForm />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
