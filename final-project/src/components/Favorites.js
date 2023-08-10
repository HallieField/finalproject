import React from 'react';

const Favorites = ({ favoriteBooks, setFavoriteBooks }) => {
  const handleRemoveFromFavorites = (book) => {
    setFavoriteBooks((prevFavorites) => prevFavorites.filter((favBook) => favBook.id !== book.id));
  };

  return (
    <div className='favorites-container-wrapper'>
    <div className='favorites-container'>
      <div className='favorites-header'>
      <h2>Favorites</h2>
      </div>
      {favoriteBooks.length > 0 ? (
        favoriteBooks.map((book) => (
          <div key={book.id}>
            <div className='favorite-item'>
            <div className='favorite-item h3'><h3>{book.title}</h3></div>
              <img src={book.image_url} alt={book.title} style={{ width: '325px', height: '520px' }} />
             
              <button className='favorite-item button' onClick={() => handleRemoveFromFavorites(book)}>Remove from Favorites</button>
            </div>
          </div>
        ))
      ) : (
        <p>No favorite books yet.</p>
      )}
      </div>
    </div>
  );
};

export default Favorites;
