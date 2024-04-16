import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdvertsThunk } from 'store/adverts/thunk';
import CampersList from 'components/CampersList/CampersList';
import style from './CatalogPage.module.css';
import {
  selectIsLoadMore,
  selectIsModalOpen,
  selectPage,
} from 'store/selectors/selectors';
import Modal from 'components/Modal/Modal';
import { loadMore } from 'store/adverts/advertsSlice';

const CatalogPage = () => {
  const page = useSelector(selectPage);
  const isModalOpen = useSelector(selectIsModalOpen);
  const isLoadMore = useSelector(selectIsLoadMore);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdvertsThunk(page));
  }, [dispatch, page]);
  return (
    <div className={style.catalog_container}>
      <CampersList />
      {isModalOpen && <Modal />}
      {isLoadMore && (
        <button onClick={() => dispatch(loadMore())}>LoadMore</button>
      )}
    </div>
  );
};
export default CatalogPage;
