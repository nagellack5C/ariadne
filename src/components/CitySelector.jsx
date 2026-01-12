import React, { useState, useEffect, useRef } from 'react';
import { cities } from '../data/airports';

const CitySelector = ({ label, value, onChange, placeholder }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredCities, setFilteredCities] = useState([]);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (value) {
      setSearchTerm(`${value.name}, ${value.country}`);
    }
  }, [value]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    setShowDropdown(true);

    if (term.length >= 2) {
      const filtered = cities.filter(city =>
        city.name.toLowerCase().includes(term.toLowerCase()) ||
        city.country.toLowerCase().includes(term.toLowerCase()) ||
        city.airports.some(airport => airport.code.toLowerCase().includes(term.toLowerCase()))
      );
      setFilteredCities(filtered.slice(0, 10));
    } else {
      setFilteredCities([]);
    }
  };

  const handleCitySelect = (city) => {
    onChange(city);
    setSearchTerm(`${city.name}, ${city.country}`);
    setShowDropdown(false);
  };

  return (
    <div className="city-selector" ref={wrapperRef}>
      <label>{label}</label>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        onFocus={() => searchTerm.length >= 2 && setShowDropdown(true)}
        placeholder={placeholder || "Search city..."}
      />
      {showDropdown && filteredCities.length > 0 && (
        <div className="autocomplete-dropdown">
          {filteredCities.map((city) => (
            <div
              key={city.name}
              className="autocomplete-item"
              onClick={() => handleCitySelect(city)}
            >
              <div><strong>{city.name}</strong></div>
              <div className="city-info">
                {city.country} • {city.airports.length} airport{city.airports.length > 1 ? 's' : ''} ({city.airports.map(a => a.code).join(', ')})
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CitySelector;
