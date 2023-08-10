import React from 'react';

const BookItemList = ({ books, onItemClick, onAddToFavorite }) => {
  if (!books || books.length === 0) {
    return <p>No books found for the selected genre or ID.</p>;
  }

  return (
    <div className="book-list">
      {books.map((book) => (
        <div className="book-item" key={book.id}>
          <div>
            <h2 className="book-title">{book.title}</h2>
          </div>
          <div>
            <img src={book.image_url} alt={book.title} className="book-image" />
          </div>
          <button className="bookButtons" onClick={() => onItemClick(book)}>View Details</button>
          <button className="bookButtons" onClick={() => onAddToFavorite(book)}>Add to Favorites</button>
        </div>
      ))}
    </div>
  );
};

export default BookItemList;
