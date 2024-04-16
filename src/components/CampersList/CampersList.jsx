import CamperCard from 'components/CamperCard/CamperCard';
import style from './CampersList.module.css';

const CampersList = ({ adverts }) => {
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
