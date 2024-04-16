import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdvertsThunk } from 'store/adverts/thunk';
import CampersList from 'components/CampersList/CampersList';
import style from './CatalogPage.module.css';
import {
  selectAdverts,
  selectIsLoadMore,
  selectIsModalOpen,
  selectPage,
  selectPrevPage,
} from 'store/selectors/selectors';
import Modal from 'components/Modal/Modal';
import { loadMore } from 'store/adverts/advertsSlice';
import { closeModal } from 'store/modal/modalSlice';
import { useLocation } from 'react-router-dom';

const CatalogPage = () => {
  const page = useSelector(selectPage);
  const prevPage = useSelector(selectPrevPage);
  const isModalOpen = useSelector(selectIsModalOpen);
  const isLoadMore = useSelector(selectIsLoadMore);
  const adverts = useSelector(selectAdverts);

  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    if (page !== prevPage) {
      dispatch(fetchAdvertsThunk(page));
    }
  }, [dispatch, page, prevPage]);

  useEffect(() => {
    dispatch(closeModal());
  }, [location.pathname, dispatch]);
  return (
    <div className={style.catalog_container}>
      <CampersList adverts={adverts} />
      {isModalOpen && <Modal />}
      {isLoadMore && (
        <button onClick={() => dispatch(loadMore())}>LoadMore</button>
      )}
    </div>
  );
};
export default CatalogPage;
