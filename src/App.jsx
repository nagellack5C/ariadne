import React, { useState } from 'react';
import Map from './components/Map';
import Sidebar from './components/Sidebar';
import { cities } from './data/airports';
import './App.css';

function App() {
  const [currentLeg, setCurrentLeg] = useState(0);
  const [tripLegs, setTripLegs] = useState([
    {
      fromCity: null,
      toCity: null,
      departureDate: '',
      flight: null,
      nights: null,
      hotel: null,
      itinerary: {},
      completed: false
    }
  ]);

  const updateCurrentLeg = (updates) => {
    setTripLegs(prev => {
      const newLegs = [...prev];
      newLegs[currentLeg] = { ...newLegs[currentLeg], ...updates };
      return newLegs;
    });
  };

  const handleFromCityChange = (city) => {
    updateCurrentLeg({ fromCity: city });
  };

  const handleToCityChange = (city) => {
    updateCurrentLeg({ toCity: city });
  };

  const handleDepartureDateChange = (date) => {
    updateCurrentLeg({ departureDate: date });
  };

  const handleFlightSelect = (flight) => {
    updateCurrentLeg({ flight });
  };

  const handleNightsChange = (nights) => {
    updateCurrentLeg({ nights });
  };

  const handleHotelSelect = (hotel) => {
    updateCurrentLeg({ hotel });
  };

  const handleItineraryChange = (day, content) => {
    setTripLegs(prev => {
      const newLegs = [...prev];
      const currentItinerary = newLegs[currentLeg].itinerary || {};
      newLegs[currentLeg] = {
        ...newLegs[currentLeg],
        itinerary: {
          ...currentItinerary,
          [day]: content
        }
      };
      return newLegs;
    });
  };

  const handleNextLeg = () => {
    // Mark current leg as completed
    setTripLegs(prev => {
      const newLegs = [...prev];
      newLegs[currentLeg] = { ...newLegs[currentLeg], completed: true };
      return newLegs;
    });

    // Create new leg starting from current destination
    const newLeg = {
      fromCity: tripLegs[currentLeg].toCity,
      toCity: null,
      departureDate: '',
      flight: null,
      nights: null,
      hotel: null,
      itinerary: {},
      completed: false
    };

    setTripLegs(prev => [...prev, newLeg]);
    setCurrentLeg(prev => prev + 1);
  };

  const handleFinishTrip = () => {
    // Mark current leg as completed
    setTripLegs(prev => {
      const newLegs = [...prev];
      newLegs[currentLeg] = { ...newLegs[currentLeg], completed: true };
      return newLegs;
    });

    // Calculate total trip cost and summary
    const totalFlightCost = tripLegs.reduce((sum, leg) => sum + (leg.flight?.price || 0), 0);
    const totalHotelCost = tripLegs.reduce((sum, leg) => {
      return sum + (leg.hotel ? leg.hotel.pricePerNight * leg.nights : 0);
    }, 0);
    const totalCost = totalFlightCost + totalHotelCost;

    alert(
      `Trip Complete!\n\n` +
      `Total Legs: ${tripLegs.length}\n` +
      `Total Flight Cost: $${totalFlightCost}\n` +
      `Total Hotel Cost: $${totalHotelCost}\n` +
      `Total Trip Cost: $${totalCost}\n\n` +
      `Your itinerary is ready! In a real app, you would now proceed to booking.`
    );
  };

  const handleRemoveLeg = (indexToRemove) => {
    // Don't allow removing the current active leg
    if (indexToRemove === currentLeg) {
      return;
    }

    setTripLegs(prev => {
      const newLegs = prev.filter((_, index) => index !== indexToRemove);
      return newLegs;
    });

    // Adjust currentLeg index if we removed a leg before it
    if (indexToRemove < currentLeg) {
      setCurrentLeg(prev => prev - 1);
    }
  };

  const handleCityClick = (city) => {
    const leg = tripLegs[currentLeg];

    if (!leg.fromCity) {
      handleFromCityChange(city);
    } else if (!leg.toCity) {
      handleToCityChange(city);
    }
  };

  // Get selected cities for map display
  const selectedCities = tripLegs
    .filter(leg => leg.fromCity || leg.toCity)
    .flatMap(leg => [leg.fromCity, leg.toCity].filter(Boolean))
    .filter((city, index, self) =>
      index === self.findIndex(c => c && city && c.name === city.name)
    );

  return (
    <div className="app">
      <Map
        cities={cities}
        selectedCities={selectedCities}
        onCityClick={handleCityClick}
        tripLegs={tripLegs}
      />
      <Sidebar
        currentLeg={currentLeg}
        tripLegs={tripLegs}
        onFromCityChange={handleFromCityChange}
        onToCityChange={handleToCityChange}
        onDepartureDateChange={handleDepartureDateChange}
        onFlightSelect={handleFlightSelect}
        onNightsChange={handleNightsChange}
        onHotelSelect={handleHotelSelect}
        onItineraryChange={handleItineraryChange}
        onNextLeg={handleNextLeg}
        onFinishTrip={handleFinishTrip}
        onRemoveLeg={handleRemoveLeg}
      />
    </div>
  );
}

export default App;
