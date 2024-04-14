import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdvertsThunk } from 'store/adverts/thunk';
import { selectAdvers } from 'store/selectors/selectors';

const CatalogPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdvertsThunk());
  }, [dispatch]);
  const adverts = useSelector(selectAdvers);

  return <div>{adverts?.length > 0 && adverts[0].id}</div>;
};
export default CatalogPage;
