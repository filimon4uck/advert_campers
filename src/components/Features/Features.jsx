import FeaturesList from 'components/Shared/FeaturesList/FeaturesList';
import style from './Features.module.css';
import BookForm from 'components/BookForm/BookForm';

const Features = ({ camper }) => {
  const {
    _id,
    name,
    price,
    rating,
    reviews,
    location,
    transmission,
    description,
    gallery,
    adults,
    details: {
      airConditioner,
      bathroom,
      kitchen,
      beds,
      TV,
      CD,
      radio,
      shower,
      toilet,
      freezer,
      hob,
      microwave,
      gas,
      water,
    },
    engine,
    consumption,
    tank,
    form,
    length,
    width,
    height,
  } = camper;
  const features = {
    adults,
    transmission,
    AC: airConditioner,
    engine,
    kitchen,
    beds,
    airConditioner,
    CD,
    radio,
    hob,
  };

  const VALUES_WITH_COUNT = ['adults', 'beds', 'airConditioner', 'hob'];
  const VALUES = ['transmission', 'engine'];
  return (
    <div className={style.features}>
      <div className={style.features_list_container}>
        <FeaturesList
          valuesWithCount={VALUES_WITH_COUNT}
          values={VALUES}
          features={features}
        />
      </div>
      <div className={style.vehicle_datails_container}>
        <h2>Vehicle details</h2>
        <ul className={style.vehicle_details_list}>
          <li className={style.vehicle_detail}>
            <span>Form</span>
            <span>{form}</span>
          </li>
          <li className={style.vehicle_detail}>
            <span>Length</span>
            <span>{length}</span>
          </li>
          <li className={style.vehicle_detail}>
            <span>Width</span>
            <span>{width}</span>
          </li>
          <li className={style.vehicle_detail}>
            <span>Height</span>
            <span>{height}</span>
          </li>
          <li className={style.vehicle_detail}>
            <span>Tank</span>
            <span>{tank}</span>
          </li>
          <li className={style.vehicle_detail}>
            <span>Consumpson</span>
            <span>{consumption}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Features;
