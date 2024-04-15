import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdvertsThunk } from 'store/adverts/thunk';
import { selectAdvers } from 'store/selectors/selectors';
import sprite from '../../images/sprite.svg';
import CamperCard from 'components/CamperCard/CamperCard';

const CatalogPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdvertsThunk());
  }, [dispatch]);
  const adverts = useSelector(selectAdvers);

  return <div>{adverts?.length > 0 && <CamperCard camper={adverts[0]} />}</div>;
};
export default CatalogPage;
