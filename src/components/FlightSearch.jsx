import React, { useState, useEffect } from 'react';
import { generateMockFlights } from '../data/mockFlights';

const FlightSearch = ({ fromAirport, toAirport, departureDate, onFlightSelect, selectedFlight }) => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (fromAirport && toAirport && departureDate) {
      setLoading(true);
      // Simulate API call delay
      setTimeout(() => {
        const mockFlights = generateMockFlights(
          fromAirport.code,
          toAirport.code,
          departureDate
        );
        setFlights(mockFlights);
        setLoading(false);
      }, 500);
    }
  }, [fromAirport, toAirport, departureDate]);

  if (!fromAirport || !toAirport || !departureDate) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">✈️</div>
        <p>Select departure and arrival cities and date to search for flights</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">⏳</div>
        <p>Searching for flights...</p>
      </div>
    );
  }

  return (
    <div>
      <div style={{ marginBottom: '15px', fontSize: '14px', color: '#6c757d' }}>
        Found {flights.length} flights from {fromAirport.city} to {toAirport.city}
      </div>

      <div className="flight-list">
        {flights.map((flight) => (
          <div
            key={flight.id}
            className={`flight-item ${selectedFlight?.id === flight.id ? 'selected' : ''}`}
            onClick={() => onFlightSelect(flight)}
          >
            <div className="flight-header">
              <div className="flight-carrier">
                {flight.carrier}
                <div style={{ fontSize: '12px', color: '#6c757d', fontWeight: 'normal' }}>
                  {flight.flightNumber}
                </div>
              </div>
              <div className="flight-price">
                ${flight.price}
              </div>
            </div>

            <div className="flight-details">
              <div className="flight-time">
                <span>{flight.departureTime}</span>
                <span>→</span>
                <span>{flight.arrivalTime}</span>
              </div>
              <div>{flight.duration}</div>
            </div>

            <div className="flight-details">
              <div>
                {flight.stops === 0 ? 'Direct' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}
              </div>
              <div style={{ color: flight.seatsAvailable < 10 ? '#dc3545' : '#28a745' }}>
                {flight.seatsAvailable} seats left
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightSearch;
