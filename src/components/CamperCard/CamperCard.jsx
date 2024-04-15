import style from './CamperCard.module.css';
const CamperCard = ({
  camper: {
    _id,
    name,
    price,
    rating,
    location,
    adults,
    children,
    engine,
    transmission,
    form,
    length,
    width,
    height,
    tank,
    consumption,
    description,
    details,
    gallery,
    reviews,
  },
}) => {
  return (
    <div className={style.card_container}>
      <div className={style.camper_picture_container}>
        <img
          className={style.camper_picture}
          src={gallery[0]}
          alt="picture_camper"
        />
      </div>
      <div>
        <div>
          <div className={style.card_head}>
            <p>{name}</p>
            <p>{price}</p>
          </div>
          <p>
            {rating}({reviews.length} Reviews)<span>{location}</span>
          </p>
          <p className={style.description}>{description}</p>
        </div>
        <ul className={style.details}>
          <li>{adults} adults</li>
          <li>{transmission}</li>
          <li>{engine}</li>
          {details.kitchen > 0 && <li>Kitchen</li>}
          {details.beds > 0 && <li>{details.beds} beds</li>}
          {details.airConditioner > 0 && <li>AC</li>}
        </ul>
        <button className={style.showMoreBtn} type="button">
          Show more
        </button>
      </div>
    </div>
  );
};
export default CamperCard;
