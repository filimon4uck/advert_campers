import { NavLink } from 'react-router-dom';
import style from './Footer.module.css';
export const Footer = () => {
  return (
    <div className={style.footer_container}>
      <span className={style.contacts}>
        <p>Contact us:</p>

        <address>
          <a href="campers@gmail.com">campers@gmail.com</a>
          <br />
          <a href="tel:+380975540132">+38 (097) 554‑0132</a>
        </address>
      </span>
      <nav>
        <ul className={style.navigation_list}>
          <li>
            <NavLink className={style.navigation_link} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={style.navigation_link} to="/catalog">
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink className={style.navigation_link} to="/favorites">
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
