import CampersList from 'components/CampersList/CampersList';
import Modal from 'components/Modal/Modal';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { closeModal } from 'store/modal/modalSlice';
import { selectFavorites, selectIsModalOpen } from 'store/selectors/selectors';
import style from './FavoritesPage.module.css';
const FavoritesPage = () => {
  const isModalOpen = useSelector(selectIsModalOpen);
  const favorites = useSelector(selectFavorites);
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeModal());
  }, [location.pathname, dispatch]);
  return (
    <div className={style.favorites_container}>
      {favorites?.length > 0 ? (
        <CampersList adverts={favorites} />
      ) : (
        <p className={style.favorites_text}>Your favorites list is empty</p>
      )}
      {isModalOpen && <Modal />}
    </div>
  );
};
export default FavoritesPage;
