import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </nav>
    </header>
  );
};
export default Header;
