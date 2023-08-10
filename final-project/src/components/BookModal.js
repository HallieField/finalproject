import React from 'react';

const BookModal = ({ book, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
        <h2>{book.title}</h2>
        <p>Author: {book.author}</p>
        <img src={book.image_url} alt={book.title} />
        <p>{book.description}</p>
      </div>
    </div>
  );
};

export default BookModal;
