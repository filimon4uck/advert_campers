import style from './BookForm.module.css';
import sprite from '../../images/sprite.svg';

const BookForm = () => {
  return (
    <div className={style.form_container}>
      <div className={style.head}>
        <h2>Book your campervan now</h2>
        <p>Stay connected! We are always ready to help you.</p>
      </div>
      <form className={style.book_form} action="submit">
        <input
          className={style.form_item}
          type="text"
          required
          name="name"
          id="name"
          placeholder="Name"
        />

        <input
          className={style.form_item}
          type="email"
          required
          name="email"
          id="email"
          placeholder="Email"
        />

        <input
          className={style.form_item}
          type="date"
          required
          name="date"
          id="date"
          defaultValue={'Booking date'}
          placeholder="Booking date"
          // onClick={e => (e.target.type = 'date')}
          // onBlur={e => (e.target.type = 'text')}
        />

        <textarea
          className={`${style.form_item} ${style.form_item_comment}`}
          name="comment"
          id="comment"
          cols="30"
          rows="3"
          placeholder="Comment"
        ></textarea>
        <button className={style.form_button} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default BookForm;
