import CampersList from 'components/CampersList/CampersList';
import Modal from 'components/Modal/Modal';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { closeModal } from 'store/modal/modalSlice';
import { selectFavorites, selectIsModalOpen } from 'store/selectors/selectors';

const FavoritesPage = () => {
  const isModalOpen = useSelector(selectIsModalOpen);
  const favorites = useSelector(selectFavorites);
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeModal());
  }, [location.pathname, dispatch]);
  return (
    <div>
      {favorites?.length > 0 && <CampersList adverts={favorites} />}
      {isModalOpen && <Modal />}
    </div>
  );
};
export default FavoritesPage;
