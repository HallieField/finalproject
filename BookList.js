import React, { useState, useEffect } from 'react';
import BookFilter from './BookFilter';
import BookItemList from './BookItemList';
import BookModal from './BookModal';

const API_URL = 'https://example-data.draftbit.com/books?_limit=100';

const BookList = ({ favoriteBooks, setFavoriteBooks }) => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    handleGetBooks(); // Fetch all books and display them initially
  }, []);

  const handleGetBooks = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Books Data:', data); 
      setBooks(data);
      setFilteredBooks(data); // Initially, set filteredBooks to all books
    } catch (err) {
      console.log('Error fetching data:', err);
      setBooks([]);
      setFilteredBooks([]);
    }
  };

  const handleGetBooksByGenre = () => {
    if (selectedGenre) {
      // Filter books based on the selected genre
      const filteredBooks = books.filter((book) =>
        book.genre_list.includes(selectedGenre)
      );

      // Sort filtered books by genre_list in ascending order
      filteredBooks.sort((a, b) => {
        if (a.genre_list.indexOf(selectedGenre) < b.genre_list.indexOf(selectedGenre)) {
          return -1;
        } else if (a.genre_list.indexOf(selectedGenre) > b.genre_list.indexOf(selectedGenre)) {
          return 1;
        } else {
          return 0;
        }
      });

      setFilteredBooks(filteredBooks);
    } else {
      setFilteredBooks(books);
    }
  };

  const handleResetBooks = () => {
    setSelectedGenre('');
    setFilteredBooks(books);
  };

  const handleBookItemClick = (book) => {
    setSelectedBook(book);
  };

  const handleModalClose = () => {
    setSelectedBook(null);
  };

  const handleAddToFavorite = (book) => {
    setFavoriteBooks((prevFavorites) => [...prevFavorites, book]);
  };

  return (
    <div className='container'>
      <BookFilter
        selectedGenre={selectedGenre}
        onGenreChange={setSelectedGenre}
        onFilterByGenre={handleGetBooksByGenre}
        onReset={handleResetBooks}
      />
       <BookItemList
        books={filteredBooks}
        onItemClick={handleBookItemClick}
        onAddToFavorite={handleAddToFavorite}
      />
      {selectedBook && <BookModal book={selectedBook} onClose={handleModalClose} />}
    </div>
  );
};

export default BookList;
