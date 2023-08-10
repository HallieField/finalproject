import React from 'react';

const BookFilter = ({ selectedGenre, onGenreChange, onFilterByGenre, onReset }) => {
  return (
    <div className='filter-container'>
      <select value={selectedGenre} onChange={(e) => onGenreChange(e.target.value)}>
        <option value="">Select a genre</option>
        <option value="Fiction">Fiction</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Classics">Classics</option>
        <option value="Romance">Romance</option>
        <option value="Horror">Horror</option>
        <option value="Mystery">Mystery</option>
        <option value="Childrens">Childrens</option>
      </select>
      <button onClick={onFilterByGenre}>Filter</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default BookFilter;
