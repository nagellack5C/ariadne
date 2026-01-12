import React from 'react';

const ItineraryEditor = ({ nights, itinerary, onItineraryChange }) => {
  if (!nights || nights <= 0) {
    return (
      <div className="empty-state" style={{ padding: '20px' }}>
        <p style={{ fontSize: '14px' }}>Select number of nights to create itinerary</p>
      </div>
    );
  }

  const days = Array.from({ length: nights }, (_, i) => i + 1);

  return (
    <div className="itinerary-editor">
      <h4 style={{ marginBottom: '15px', fontSize: '16px' }}>Plan Your Days</h4>
      {days.map((day) => (
        <div key={day} className="itinerary-day">
          <label>Day {day}</label>
          <textarea
            placeholder="What would you like to do on this day?"
            value={itinerary[day] || ''}
            onChange={(e) => onItineraryChange(day, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default ItineraryEditor;
