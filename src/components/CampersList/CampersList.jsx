import CamperCard from 'components/CamperCard/CamperCard';
import { useSelector } from 'react-redux';
import { selectAdverts } from 'store/selectors/selectors';
import style from './CampersList.module.css';

const CampersList = () => {
  const adverts = useSelector(selectAdverts);
  return (
    <>
      {adverts?.length > 0 && (
        <ul className={style.campers_list}>
          {adverts.map(camper => {
            return (
              <li key={camper._id}>
                <CamperCard camper={camper} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default CampersList;
