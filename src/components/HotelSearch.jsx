import React, { useState, useEffect } from 'react';
import { generateMockHotels } from '../data/mockHotels';

const HotelSearch = ({ city, nights, onHotelSelect, selectedHotel }) => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    maxPrice: 500,
    minRating: 0,
    minStars: 0
  });

  useEffect(() => {
    if (city) {
      setLoading(true);
      // Simulate API call delay
      setTimeout(() => {
        const mockHotels = generateMockHotels(city.name);
        setHotels(mockHotels);
        setLoading(false);
      }, 500);
    }
  }, [city]);

  const filteredHotels = hotels.filter(hotel => {
    return hotel.pricePerNight <= filters.maxPrice &&
           hotel.rating >= filters.minRating &&
           hotel.stars >= filters.minStars;
  });

  if (!city) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">🏨</div>
        <p>Select a flight to search for hotels in destination city</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">⏳</div>
        <p>Searching for hotels...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="filter-section">
        <label>Max Price per Night: ${filters.maxPrice}</label>
        <input
          type="range"
          min="50"
          max="1000"
          step="50"
          value={filters.maxPrice}
          onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
        />
      </div>

      <div className="filter-section">
        <label>Minimum Rating: {filters.minRating}/10</label>
        <input
          type="range"
          min="0"
          max="10"
          step="0.5"
          value={filters.minRating}
          onChange={(e) => setFilters({ ...filters, minRating: Number(e.target.value) })}
        />
      </div>

      <div className="filter-section">
        <label>Minimum Stars: {filters.minStars || 'Any'}</label>
        <input
          type="range"
          min="0"
          max="5"
          step="1"
          value={filters.minStars}
          onChange={(e) => setFilters({ ...filters, minStars: Number(e.target.value) })}
        />
      </div>

      <div style={{ marginBottom: '15px', fontSize: '14px', color: '#6c757d' }}>
        Found {filteredHotels.length} hotels in {city.name}
      </div>

      <div className="hotel-list">
        {filteredHotels.map((hotel) => {
          const totalPrice = hotel.pricePerNight * (nights || 1);

          return (
            <div
              key={hotel.id}
              className={`hotel-item ${selectedHotel?.id === hotel.id ? 'selected' : ''}`}
              onClick={() => onHotelSelect(hotel)}
            >
              <div className="hotel-header">
                <div>
                  <div className="hotel-name">{hotel.name}</div>
                  <div className="hotel-rating">
                    <span className="stars">{'★'.repeat(hotel.stars)}</span>
                    <span className="rating-score">{hotel.rating}/10</span>
                    <span style={{ fontSize: '12px', color: '#6c757d' }}>
                      ({hotel.reviews} reviews)
                    </span>
                  </div>
                </div>
                <div>
                  <div className="hotel-price">
                    ${totalPrice}
                  </div>
                  <div className="hotel-price-label">
                    ${hotel.pricePerNight}/night
                  </div>
                </div>
              </div>

              <div style={{ fontSize: '13px', color: '#6c757d', marginBottom: '8px' }}>
                📍 {hotel.distanceFromCenter} km from center
              </div>

              <div className="hotel-amenities">
                {hotel.amenities.slice(0, 5).map((amenity, index) => (
                  <span key={index} className="amenity-tag">
                    {amenity}
                  </span>
                ))}
                {hotel.amenities.length > 5 && (
                  <span className="amenity-tag">
                    +{hotel.amenities.length - 5} more
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HotelSearch;
