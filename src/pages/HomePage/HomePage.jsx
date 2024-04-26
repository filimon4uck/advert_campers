import { NavLink } from 'react-router-dom';
import style from './HomePage.module.css';
const HomePage = () => {
  return (
    <div className={style.home_container}>
      <h1 className={style.title}>Rent a motorhome & start your adventure</h1>

      <NavLink className={style.call_to_action} to={'./catalog'}>
        Book now
      </NavLink>
    </div>
  );
};
export default HomePage;
