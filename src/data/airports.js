// Major cities with airports and their coordinates
export const airports = [
  // North America
  { code: 'JFK', city: 'New York', country: 'USA', lat: 40.6413, lon: -73.7781 },
  { code: 'LAX', city: 'Los Angeles', country: 'USA', lat: 33.9416, lon: -118.4085 },
  { code: 'ORD', city: 'Chicago', country: 'USA', lat: 41.9742, lon: -87.9073 },
  { code: 'MIA', city: 'Miami', country: 'USA', lat: 25.7959, lon: -80.2870 },
  { code: 'SFO', city: 'San Francisco', country: 'USA', lat: 37.6213, lon: -122.3790 },
  { code: 'YYZ', city: 'Toronto', country: 'Canada', lat: 43.6777, lon: -79.6248 },
  { code: 'MEX', city: 'Mexico City', country: 'Mexico', lat: 19.4363, lon: -99.0721 },

  // Europe
  { code: 'LHR', city: 'London', country: 'UK', lat: 51.4700, lon: -0.4543 },
  { code: 'CDG', city: 'Paris', country: 'France', lat: 49.0097, lon: 2.5479 },
  { code: 'FRA', city: 'Frankfurt', country: 'Germany', lat: 50.0379, lon: 8.5622 },
  { code: 'AMS', city: 'Amsterdam', country: 'Netherlands', lat: 52.3105, lon: 4.7683 },
  { code: 'MAD', city: 'Madrid', country: 'Spain', lat: 40.4983, lon: -3.5676 },
  { code: 'BCN', city: 'Barcelona', country: 'Spain', lat: 41.2974, lon: 2.0833 },
  { code: 'FCO', city: 'Rome', country: 'Italy', lat: 41.8003, lon: 12.2389 },
  { code: 'VCE', city: 'Venice', country: 'Italy', lat: 45.5053, lon: 12.3519 },
  { code: 'ATH', city: 'Athens', country: 'Greece', lat: 37.9364, lon: 23.9445 },
  { code: 'PRG', city: 'Prague', country: 'Czech Republic', lat: 50.1008, lon: 14.2632 },
  { code: 'VIE', city: 'Vienna', country: 'Austria', lat: 48.1103, lon: 16.5697 },
  { code: 'ZRH', city: 'Zurich', country: 'Switzerland', lat: 47.4647, lon: 8.5492 },

  // Asia
  { code: 'DXB', city: 'Dubai', country: 'UAE', lat: 25.2532, lon: 55.3657 },
  { code: 'HKG', city: 'Hong Kong', country: 'Hong Kong', lat: 22.3080, lon: 113.9185 },
  { code: 'NRT', city: 'Tokyo', country: 'Japan', lat: 35.7720, lon: 140.3929 },
  { code: 'SIN', city: 'Singapore', country: 'Singapore', lat: 1.3644, lon: 103.9915 },
  { code: 'BKK', city: 'Bangkok', country: 'Thailand', lat: 13.6900, lon: 100.7501 },
  { code: 'DEL', city: 'Delhi', country: 'India', lat: 28.5562, lon: 77.1000 },
  { code: 'ICN', city: 'Seoul', country: 'South Korea', lat: 37.4602, lon: 126.4407 },
  { code: 'PEK', city: 'Beijing', country: 'China', lat: 40.0799, lon: 116.6031 },

  // Oceania
  { code: 'SYD', city: 'Sydney', country: 'Australia', lat: -33.9399, lon: 151.1753 },
  { code: 'MEL', city: 'Melbourne', country: 'Australia', lat: -37.6690, lon: 144.8410 },
  { code: 'AKL', city: 'Auckland', country: 'New Zealand', lat: -37.0082, lon: 174.7850 },

  // South America
  { code: 'GRU', city: 'São Paulo', country: 'Brazil', lat: -23.4356, lon: -46.4731 },
  { code: 'GIG', city: 'Rio de Janeiro', country: 'Brazil', lat: -22.8099, lon: -43.2505 },
  { code: 'EZE', city: 'Buenos Aires', country: 'Argentina', lat: -34.8222, lon: -58.5358 },
  { code: 'BOG', city: 'Bogotá', country: 'Colombia', lat: 4.7016, lon: -74.1469 },

  // Africa
  { code: 'JNB', city: 'Johannesburg', country: 'South Africa', lat: -26.1367, lon: 28.2411 },
  { code: 'CAI', city: 'Cairo', country: 'Egypt', lat: 30.1219, lon: 31.4056 },
];

export const getAirportByCode = (code) => {
  return airports.find(a => a.code === code);
};

export const getAirportsByCity = (city) => {
  return airports.filter(a => a.city.toLowerCase().includes(city.toLowerCase()));
};
