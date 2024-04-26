import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdvertsThunk } from 'store/adverts/thunk';
import CampersList from 'components/CampersList/CampersList';
import style from './CatalogPage.module.css';
import {
  selectAdverts,
  selectIsLoadMore,
  selectIsLoading,
  selectIsModalOpen,
  selectPage,
  selectPrevPage,
} from 'store/selectors/selectors';
import Modal from 'components/Modal/Modal';
import { loadMore } from 'store/adverts/advertsSlice';
import Filters from 'components/Filters/Filters';
import Loader from 'components/Loader/Loader';

const CatalogPage = () => {
  const page = useSelector(selectPage);
  const prevPage = useSelector(selectPrevPage);
  const isModalOpen = useSelector(selectIsModalOpen);
  const isLoading = useSelector(selectIsLoading);
  const isLoadMore = useSelector(selectIsLoadMore);
  const adverts = useSelector(selectAdverts);
  if (isModalOpen) {
    document.body.classList.add('disable-scrolling');
  } else {
    document.body.classList.remove('disable-scrolling');
  }
  const dispatch = useDispatch();
  useEffect(() => {
    if (page !== prevPage) {
      dispatch(fetchAdvertsThunk(page));
    }
  }, [dispatch, page, prevPage]);
  return (
    <div className={style.catalog_page_container}>
      <Filters />

      <div className={style.catalog_container}>
        {isLoading && <Loader />}
        {adverts.length > 0 && <CampersList adverts={adverts} />}
        {isModalOpen && <Modal />}
        {isLoadMore && (
          <button
            className={style.load_more_btn}
            onClick={() => dispatch(loadMore())}
          >
            LoadMore
          </button>
        )}
      </div>
    </div>
  );
};
export default CatalogPage;
