import React, { useState, useEffect } from 'react';
import { generateMockFlights } from '../data/mockFlights';

const FlightSearch = ({ fromCity, toCity, departureDate, onFlightSelect, selectedFlight }) => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (fromCity && toCity && departureDate) {
      setLoading(true);
      // Simulate API call delay
      setTimeout(() => {
        // Generate flights for all airport pair combinations
        const allFlights = [];

        fromCity.airports.forEach(fromAirport => {
          toCity.airports.forEach(toAirport => {
            const routeFlights = generateMockFlights(
              fromAirport.code,
              toAirport.code,
              departureDate
            );
            allFlights.push(...routeFlights);
          });
        });

        // Sort all flights by price
        allFlights.sort((a, b) => a.price - b.price);

        setFlights(allFlights);
        setLoading(false);
      }, 500);
    }
  }, [fromCity, toCity, departureDate]);

  if (!fromCity || !toCity || !departureDate) {
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
        Found {flights.length} flights from {fromCity.name} to {toCity.name}
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
                  {flight.flightNumber} • {flight.from} → {flight.to}
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
