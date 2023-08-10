import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetails from './components/BookModal';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Favorites from './components/Favorites';
import BookClubSignup from './components/BookClubSignup';

function App() {
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<BookList favoriteBooks={favoriteBooks} setFavoriteBooks={setFavoriteBooks} />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/favorites" element={<Favorites favoriteBooks={favoriteBooks} setFavoriteBooks={setFavoriteBooks} />} />
          <Route path="/BookClubSignup" element={<BookClubSignup />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
