import CamperCard from 'components/CamperCard/CamperCard';
import style from './CampersList.module.css';
import { useSelector } from 'react-redux';
import { selectFilter } from 'store/selectors/selectors';

const CampersList = ({ adverts }) => {
  const filter = useSelector(selectFilter);

  const filteredAdverts = adverts.filter(camper => {
    if (filter.location && camper.location !== filter.location) {
      return false;
    }

    if (filter.vehicleType && camper.form !== filter.vehicleType) {
      return false;
    }

    // if (filter.vehicleEquipment) {
    //   const { AC, Automatic, Kitchen, TV, Shower } = filter.vehicleEquipment;
    //   const camperEquipmentCount = Object.values(camper).filter(
    //     value =>
    //       value === 1 &&
    //       value !== 'transmission' &&
    //       ['AC', 'Automatic', 'Kitchen', 'TV', 'Shower'].includes(value)
    //   ).length;

    //   if (
    //     (AC && !camper.airConditioner) ||
    //     (Automatic &&
    //       (!camper.transmission || camper.transmission !== 'automatic')) ||
    //     (Kitchen && !camper.kitchen) ||
    //     (TV && !camper.TV) ||
    //     (Shower && !camper.shower) ||
    //     camperEquipmentCount !== Object.keys(filter.vehicleEquipment).length
    //   ) {
    //     return false;
    //   }
    // }

    return true;
  });

  return (
    <>
      {filteredAdverts?.length > 0 && (
        <ul className={style.campers_list}>
          {filteredAdverts.map(camper => {
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
