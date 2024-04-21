import BookSingleCard from './BookSingleCard';

function BooksCard(props) {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3'>
      {props.books.map((item) => (
        <BookSingleCard item={item} />
      ))}
    </div>
  )
}
export default BooksCard;