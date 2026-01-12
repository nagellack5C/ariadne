import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers not showing in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Component to fit bounds when cities change
function MapBounds({ cities }) {
  const map = useMap();

  useEffect(() => {
    if (cities && cities.length > 0) {
      if (cities.length === 1) {
        // For a single city, just center on it with a moderate zoom level
        map.setView([cities[0].lat, cities[0].lon], 5, { animate: true });
      } else {
        // For multiple cities, fit bounds with max zoom to prevent over-zooming
        const bounds = L.latLngBounds(cities.map(c => [c.lat, c.lon]));
        map.fitBounds(bounds, { padding: [50, 50], maxZoom: 6 });
      }
    }
  }, [cities, map]);

  return null;
}

const Map = ({ cities, selectedCities, onCityClick, tripLegs }) => {
  return (
    <div className="map-container">
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ height: '100%', width: '100%' }}
        worldCopyJump={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Show all city markers */}
        {cities.map((city) => {
          const isSelected = selectedCities.some(c => c.name === city.name);

          return (
            <Marker
              key={city.name}
              position={[city.lat, city.lon]}
              eventHandlers={{
                click: () => onCityClick(city)
              }}
            >
              <Popup>
                <div>
                  <strong>{city.name}</strong><br />
                  {city.country}<br />
                  <div style={{ marginTop: '5px', fontSize: '12px', color: '#666' }}>
                    {city.airports.length} airport{city.airports.length > 1 ? 's' : ''}:
                    {city.airports.map((airport, idx) => (
                      <div key={airport.code}>
                        {airport.code} - {airport.name}
                      </div>
                    ))}
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}

        {/* Draw lines between trip legs */}
        {tripLegs.map((leg, index) => {
          if (leg.fromCity && leg.toCity) {
            return (
              <Polyline
                key={`leg-${index}`}
                positions={[
                  [leg.fromCity.lat, leg.fromCity.lon],
                  [leg.toCity.lat, leg.toCity.lon]
                ]}
                color="#007bff"
                weight={3}
                opacity={0.7}
              />
            );
          }
          return null;
        })}

        <MapBounds cities={selectedCities.length > 0 ? selectedCities : []} />
      </MapContainer>

      {selectedCities.length === 0 && (
        <div className="map-instructions">
          Click on a city marker or search in the sidebar to start planning your trip
        </div>
      )}
    </div>
  );
};

export default Map;
