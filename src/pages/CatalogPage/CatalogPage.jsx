import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdvertsThunk } from 'store/adverts/thunk';
import { selectAdvers } from 'store/selectors/selectors';
import sprite from '../../images/sprite.svg';
import CamperCard from 'components/CamperCard/CamperCard';
import BookForm from 'components/BookForm/BookForm';

const CatalogPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdvertsThunk());
  }, [dispatch]);
  const adverts = useSelector(selectAdvers);

  return <div>{<BookForm />}</div>;
};
export default CatalogPage;
