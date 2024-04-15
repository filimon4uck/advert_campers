import style from './BookForm.module.css';
const BookForm = () => {
  return (
    <div>
      <h2>Book your campervan now</h2>
      <p>Stay connected! We are always ready to help you.</p>
      <form className={style.book_form} action="submit">
        <label htmlFor="name">Name</label>
        <input type="text" required name="name" id="name" />
        <label htmlFor="email">Email</label>
        <input type="email" required name="email" id="email" />
        <label htmlFor="date">Booking date</label>
        <input type="date" required name="date" id="date" />
        <label htmlFor="comment">Booking date</label>
        <textarea name="comment" id="comment" cols="30" rows="3"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default BookForm;
