import React, { useState } from 'react';
import './SearchComponent.css';

const SearchComponent = ({ onCityChange }) => {
  const [inputCity, setInputCity] = useState('');

  const handleInputChange = (e) => {
    setInputCity(e.target.value);
  };

  const handleSearch = () => {
    onCityChange(inputCity);
  };

  const handleBlur = () => {
    handleSearch();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter a city"
        value={inputCity}
        onChange={handleInputChange}
        onBlur={handleBlur}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default SearchComponent;
