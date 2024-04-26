import { NavLink, useLocation } from 'react-router-dom';
import style from './Header.module.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className={style.header}>
      <nav>
        <ul className={style.navigation_list}>
          <li>
            <NavLink
              className={`${style.navigation_link} ${
                location.pathname === '/' ? style.active_link : ''
              }`}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`${style.navigation_link} ${
                location.pathname === '/catalog' ? style.active_link : ''
              }`}
              to="/catalog"
            >
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`${style.navigation_link} ${
                location.pathname === '/favorites' ? style.active_link : ''
              }`}
              to="/favorites"
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
