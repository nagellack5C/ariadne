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

// Component to fit bounds when airports change
function MapBounds({ airports }) {
  const map = useMap();

  useEffect(() => {
    if (airports && airports.length > 0) {
      const bounds = L.latLngBounds(airports.map(a => [a.lat, a.lon]));
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [airports, map]);

  return null;
}

const Map = ({ airports, selectedAirports, onAirportClick, tripLegs }) => {
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

        {/* Show all airport markers */}
        {airports.map((airport) => {
          const isSelected = selectedAirports.some(a => a.code === airport.code);

          return (
            <Marker
              key={airport.code}
              position={[airport.lat, airport.lon]}
              eventHandlers={{
                click: () => onAirportClick(airport)
              }}
            >
              <Popup>
                <div>
                  <strong>{airport.city}</strong><br />
                  {airport.country}<br />
                  <em>({airport.code})</em>
                </div>
              </Popup>
            </Marker>
          );
        })}

        {/* Draw lines between trip legs */}
        {tripLegs.map((leg, index) => {
          if (leg.flight && leg.flight.from && leg.flight.to) {
            const fromAirport = airports.find(a => a.code === leg.flight.from);
            const toAirport = airports.find(a => a.code === leg.flight.to);

            if (fromAirport && toAirport) {
              return (
                <Polyline
                  key={`leg-${index}`}
                  positions={[
                    [fromAirport.lat, fromAirport.lon],
                    [toAirport.lat, toAirport.lon]
                  ]}
                  color="#007bff"
                  weight={3}
                  opacity={0.7}
                />
              );
            }
          }
          return null;
        })}

        <MapBounds airports={selectedAirports.length > 0 ? selectedAirports : []} />
      </MapContainer>

      {selectedAirports.length === 0 && (
        <div className="map-instructions">
          Click on a city marker or search in the sidebar to start planning your trip
        </div>
      )}
    </div>
  );
};

export default Map;
