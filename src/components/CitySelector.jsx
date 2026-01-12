import React, { useState, useEffect, useRef } from 'react';
import { airports } from '../data/airports';

const CitySelector = ({ label, value, onChange, placeholder }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredAirports, setFilteredAirports] = useState([]);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (value) {
      setSearchTerm(`${value.city}, ${value.country} (${value.code})`);
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
      const filtered = airports.filter(airport =>
        airport.city.toLowerCase().includes(term.toLowerCase()) ||
        airport.country.toLowerCase().includes(term.toLowerCase()) ||
        airport.code.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredAirports(filtered.slice(0, 10));
    } else {
      setFilteredAirports([]);
    }
  };

  const handleAirportSelect = (airport) => {
    onChange(airport);
    setSearchTerm(`${airport.city}, ${airport.country} (${airport.code})`);
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
        placeholder={placeholder || "Search city or airport code..."}
      />
      {showDropdown && filteredAirports.length > 0 && (
        <div className="autocomplete-dropdown">
          {filteredAirports.map((airport) => (
            <div
              key={airport.code}
              className="autocomplete-item"
              onClick={() => handleAirportSelect(airport)}
            >
              <div><strong>{airport.city}</strong></div>
              <div className="city-info">
                {airport.country} ({airport.code})
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CitySelector;
