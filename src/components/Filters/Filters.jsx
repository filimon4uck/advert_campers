import style from './Filters.module.css';
import CheckboxFilter from './CheckboxFilter';
import RadioFilter from './RadioFilter';
import { useState } from 'react';
import sprite from '../../images/sprite.svg';
import { useDispatch } from 'react-redux';
import {
  resetFilter,
  setLocation,
  setVehicleEquipment,
  setVehicleType,
} from 'store/filter/filterSlice';

const Filters = () => {
  const LOCATIONS_CONSTANTS = [
    'Ukraine, Kyiv',
    'Ukraine, Poltava',
    'Ukraine, Dnipro',
    'Ukraine, Odesa',
    'Ukraine, Kharkiv',
    'Ukraine, Sumy',
    'Ukraine, Lviv',
  ];

  const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedEquipment, setSelectedEquipment] = useState({
    AC: false,
    Automatic: false,
    Kitchen: false,
    TV: false,
    Shower: false,
  });

  const handleRadioChange = event => {
    setSelectedOption(event.target.value);
  };

  const handleEquipmentChange = event => {
    const { name, checked } = event.target;
    setSelectedEquipment({ ...selectedEquipment, [name]: checked });
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(resetFilter());
    dispatch(setLocation(selectedLocation));
    dispatch(setVehicleType(selectedOption));
    dispatch(setVehicleEquipment(selectedEquipment));
  };

  return (
    <div className={style.filters}>
      <form onSubmit={handleSubmit}>
        <div className={style.location_wrapper}>
          <p>Location</p>
          <label htmlFor="city" className={style.select_icon_wrapper}>
            <svg width={20} height={20}>
              <use href={sprite + '#icon-location'} />
            </svg>
            <select
              className={style.select}
              name="city"
              value={selectedLocation}
              onChange={e => setSelectedLocation(e.target.value)}
            >
              <option value={''}>All</option>
              {LOCATIONS_CONSTANTS.map((location, index) => (
                <option key={index} value={location}>
                  {location.split(',').reverse().join(', ')}
                </option>
              ))}
            </select>
          </label>
        </div>
        <p className={style.title_filters}>Filters</p>
        <div>
          <h3 className={style.filters_header}>Vehicle equipment</h3>
          <ul className={style.filter_check_list}>
            <li>
              <CheckboxFilter
                name={'AC'}
                id={'AC'}
                checked={selectedEquipment.AC}
                onChange={handleEquipmentChange}
              />
            </li>
            <li>
              <CheckboxFilter
                name={'Automatic'}
                id={'transmission'}
                checked={selectedEquipment.Automatic}
                onChange={handleEquipmentChange}
              />
            </li>
            <li>
              <CheckboxFilter
                name={'Kitchen'}
                id={'kitchen'}
                checked={selectedEquipment.Kitchen}
                onChange={handleEquipmentChange}
              />
            </li>
            <li>
              <CheckboxFilter
                name={'TV'}
                id={'TV'}
                checked={selectedEquipment.TV}
                onChange={handleEquipmentChange}
              />
            </li>
            <li>
              <CheckboxFilter
                name={'Shower/WC'}
                id={'shower'}
                checked={selectedEquipment.Shower}
                onChange={handleEquipmentChange}
              />
            </li>
          </ul>
        </div>
        <h3 className={style.filters_header}>Vehicle type</h3>
        <ul className={style.types_list}>
          <li className={style.types_list_item}>
            <RadioFilter
              name={'Van'}
              id={'panelTruck'}
              checked={selectedOption === 'panelTruck'}
              onChange={handleRadioChange}
            />
          </li>
          <li className={style.types_list_item}>
            <RadioFilter
              name={'Fully Integrated'}
              id={'fullyIntegrated'}
              checked={selectedOption === 'fullyIntegrated'}
              onChange={handleRadioChange}
            />
          </li>
          <li className={style.types_list_item}>
            <RadioFilter
              name={'Alcove'}
              id={'alcove'}
              checked={selectedOption === 'alcove'}
              onChange={handleRadioChange}
            />
          </li>
        </ul>
        <button type="submit" className={style.filter_search_button}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Filters;
