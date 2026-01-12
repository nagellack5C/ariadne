import React from 'react';
import CitySelector from './CitySelector';
import FlightSearch from './FlightSearch';
import HotelSearch from './HotelSearch';
import ItineraryEditor from './ItineraryEditor';

const Sidebar = ({
  currentLeg,
  tripLegs,
  onFromCityChange,
  onToCityChange,
  onDepartureDateChange,
  onFlightSelect,
  onNightsChange,
  onHotelSelect,
  onItineraryChange,
  onNextLeg,
  onFinishTrip,
  onRemoveLeg
}) => {
  const leg = tripLegs[currentLeg] || {};

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>Ariadne</h1>
        <p>Multi-city travel planner</p>
      </div>

      <div className="sidebar-content">
        {/* Trip Summary */}
        {tripLegs.length > 0 && tripLegs.some(l => l.completed) && (
          <div className="trip-summary">
            <h3>Your Trip</h3>
            {tripLegs.map((tripLeg, index) => {
              if (!tripLeg.completed) return null;

              return (
                <div key={index} className="trip-leg">
                  <div className="trip-leg-header">
                    <span>✈️ Leg {index + 1}: {tripLeg.fromCity?.name} → {tripLeg.toCity?.name}</span>
                    <button
                      className="btn-remove-leg"
                      onClick={() => onRemoveLeg(index)}
                      title="Remove this leg"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="trip-leg-details">
                    <strong>Flight:</strong> {tripLeg.flight?.carrier} ({tripLeg.flight?.from} → {tripLeg.flight?.to}) - ${tripLeg.flight?.price}<br />
                    <strong>Hotel:</strong> {tripLeg.hotel?.name} - ${tripLeg.hotel?.pricePerNight} × {tripLeg.nights} nights<br />
                    <strong>Activities:</strong> {Object.keys(tripLeg.itinerary).length} days planned
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Current Leg Planning */}
        <div className="step active">
          <div className="step-header">
            <div className="step-number">{currentLeg + 1}</div>
            <div className="step-title">
              {currentLeg === 0 ? 'Start Your Journey' : `Next Destination (Leg ${currentLeg + 1})`}
            </div>
          </div>

          {/* City Selection */}
          <CitySelector
            label="From"
            value={leg.fromCity}
            onChange={onFromCityChange}
            placeholder="Departure city..."
          />

          <CitySelector
            label="To"
            value={leg.toCity}
            onChange={onToCityChange}
            placeholder="Destination city..."
          />

          <div className="date-selector">
            <label>Departure Date</label>
            <input
              type="date"
              value={leg.departureDate || ''}
              onChange={(e) => onDepartureDateChange(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>

        {/* Flight Selection */}
        {leg.fromCity && leg.toCity && leg.departureDate && (
          <div className={`step ${leg.flight ? 'completed' : 'active'}`}>
            <div className="step-header">
              <div className="step-number">✈️</div>
              <div className="step-title">Select Flight</div>
            </div>

            <FlightSearch
              fromCity={leg.fromCity}
              toCity={leg.toCity}
              departureDate={leg.departureDate}
              onFlightSelect={onFlightSelect}
              selectedFlight={leg.flight}
            />
          </div>
        )}

        {/* Hotel Selection */}
        {leg.flight && (
          <div className={`step ${leg.hotel ? 'completed' : 'active'}`}>
            <div className="step-header">
              <div className="step-number">🏨</div>
              <div className="step-title">Select Accommodation</div>
            </div>

            <div className="nights-selector">
              <label>Number of Nights</label>
              <input
                type="number"
                min="1"
                max="30"
                value={leg.nights || ''}
                onChange={(e) => onNightsChange(Number(e.target.value))}
                placeholder="How many nights?"
              />
            </div>

            {leg.nights && (
              <HotelSearch
                city={leg.toCity}
                nights={leg.nights}
                onHotelSelect={onHotelSelect}
                selectedHotel={leg.hotel}
              />
            )}
          </div>
        )}

        {/* Itinerary Planning */}
        {leg.hotel && leg.nights && (
          <div className={`step ${leg.itineraryComplete ? 'completed' : 'active'}`}>
            <div className="step-header">
              <div className="step-number">📝</div>
              <div className="step-title">Plan Your Itinerary</div>
            </div>

            <ItineraryEditor
              nights={leg.nights}
              itinerary={leg.itinerary || {}}
              onItineraryChange={onItineraryChange}
            />

            <div className="action-buttons">
              <button
                className="btn btn-primary"
                onClick={onNextLeg}
              >
                Add Next Destination
              </button>
              <button
                className="btn btn-success"
                onClick={onFinishTrip}
              >
                Finish Trip
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
