// SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchProperty, setSearchProperty] = useState('name'); // Default search property

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchTerm, searchProperty);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(searchTerm, searchProperty);
    }
  };

  const handlePropertyChange = (e) => {
    setSearchProperty(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={`Search ${searchProperty}`}
        value={searchTerm}
        onChange={handleSearchChange}
        onKeyPress={handleKeyPress}
      />
      <select onChange={handlePropertyChange} value={searchProperty}>
        <option value="name">Name</option>
        <option value="email">Email</option>
        <option value="role">Role</option>
      </select>
      <button className="search-icon" onClick={handleSearchClick}>
        <i className="fas fa-search"></i> Search {/* Font Awesome search icon */}
      </button>
    </div>
  );
};

export default SearchBar;
