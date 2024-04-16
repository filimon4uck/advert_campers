import BookForm from 'components/BookForm/BookForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdverts, selectCardId } from 'store/selectors/selectors';
import sprite from '../../images/sprite.svg';
import { closeModal } from 'store/modal/modalSlice';

const Modal = () => {
  const dispatch = useDispatch();
  const cardId = useSelector(selectCardId);
  const adverts = useSelector(selectAdverts);
  const { name, rating, reviews, location, price, gallery, description } =
    adverts?.find(({ _id }) => cardId === _id);

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
  }, []);

  const handleClickOverlay = evt => {
    if (evt.currentTarget === evt.target) {
      dispatch(closeModal());
    }
  };

  return (
    <div onClick={handleClickOverlay}>
      <div>
        <div>
          <h1>{name}</h1>
          <button type="button" onClick={() => dispatch(closeModal())}>
            <svg width={16} height={16}>
              <use href={sprite + '#close_icon'}></use>
            </svg>
          </button>
        </div>
        <p>
          {rating}({reviews.length} reviews)<span>{location}</span>
        </p>
        <p>{price}</p>
        <div>
          {gallery.map(image => (
            <div key={gallery.indexOf(image)}>
              <img src={image} alt="camprer_image" />
            </div>
          ))}
        </div>
        <p>{description}</p>
        <ul>
          <li>
            <button type="button">Features</button>
          </li>
          <li>
            <button type="button">Reviews</button>
          </li>
        </ul>
        <div>
          <BookForm />
        </div>
      </div>
    </div>
  );
};

export default Modal;
