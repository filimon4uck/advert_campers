import style from './Loader.module.css';
import { TailSpin } from 'react-loader-spinner';
const Loader = () => {
  return (
    <TailSpin
      wrapperClass={style.loaderContainer}
      visible={true}
      height="60"
      width="60"
      color="black"
      ariaLabel="tail-spin-loading"
      radius="1"
    />
  );
};
export default Loader;
