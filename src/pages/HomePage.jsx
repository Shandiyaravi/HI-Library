import { useContext } from 'react';
import CardItem from '../components/CardItem';
import { BookContext } from '../hooks/bookContext';
import noImage from '../assets/No-Image-Placeholder.png';

const Homepage = () => {
  const { books } = useContext(BookContext);

  return (
    <div className='container p-2'>
      <div className='d-flex row justify-content-center align-items-center g-3'>
        {books.map((book) => (
          <CardItem
            key={book.id}
            image={book.volumeInfo.imageLinks.thumbnail ?? noImage}
            title={book.volumeInfo.title}
            id={book.id}
            price={
              book.saleInfo.listPrice
                ? book.saleInfo.listPrice.amount
                : 'No Price'
            }
            currency={
              book.saleInfo.listPrice
                ? book.saleInfo.listPrice.currencyCode
                : ''
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
