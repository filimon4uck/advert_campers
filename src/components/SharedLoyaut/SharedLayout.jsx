import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import style from './SharedLayout.module.css';
import { Footer } from 'components/Footer/Footer';

const SharedLayout = () => {
  return (
    <div className={style.container}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default SharedLayout;
