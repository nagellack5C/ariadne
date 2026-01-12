// Cities with their airports - each city can have multiple airports
export const cities = [
  // North America
  {
    name: 'New York',
    country: 'USA',
    lat: 40.7128,
    lon: -74.0060,
    airports: [
      { code: 'JFK', name: 'John F. Kennedy International', lat: 40.6413, lon: -73.7781 },
      { code: 'LGA', name: 'LaGuardia', lat: 40.7769, lon: -73.8740 },
      { code: 'EWR', name: 'Newark Liberty International', lat: 40.6895, lon: -74.1745 }
    ]
  },
  {
    name: 'Los Angeles',
    country: 'USA',
    lat: 34.0522,
    lon: -118.2437,
    airports: [
      { code: 'LAX', name: 'Los Angeles International', lat: 33.9416, lon: -118.4085 },
      { code: 'BUR', name: 'Hollywood Burbank', lat: 34.2007, lon: -118.3585 },
      { code: 'ONT', name: 'Ontario International', lat: 34.0560, lon: -117.6012 }
    ]
  },
  {
    name: 'Chicago',
    country: 'USA',
    lat: 41.8781,
    lon: -87.6298,
    airports: [
      { code: 'ORD', name: "O'Hare International", lat: 41.9742, lon: -87.9073 },
      { code: 'MDW', name: 'Midway International', lat: 41.7868, lon: -87.7522 }
    ]
  },
  {
    name: 'Miami',
    country: 'USA',
    lat: 25.7617,
    lon: -80.1918,
    airports: [
      { code: 'MIA', name: 'Miami International', lat: 25.7959, lon: -80.2870 },
      { code: 'FLL', name: 'Fort Lauderdale-Hollywood International', lat: 26.0742, lon: -80.1506 }
    ]
  },
  {
    name: 'San Francisco',
    country: 'USA',
    lat: 37.7749,
    lon: -122.4194,
    airports: [
      { code: 'SFO', name: 'San Francisco International', lat: 37.6213, lon: -122.3790 },
      { code: 'OAK', name: 'Oakland International', lat: 37.7214, lon: -122.2208 },
      { code: 'SJC', name: 'San Jose International', lat: 37.3639, lon: -121.9289 }
    ]
  },
  {
    name: 'Toronto',
    country: 'Canada',
    lat: 43.6532,
    lon: -79.3832,
    airports: [
      { code: 'YYZ', name: 'Toronto Pearson International', lat: 43.6777, lon: -79.6248 },
      { code: 'YTZ', name: 'Billy Bishop Toronto City', lat: 43.6275, lon: -79.3963 }
    ]
  },
  {
    name: 'Mexico City',
    country: 'Mexico',
    lat: 19.4326,
    lon: -99.1332,
    airports: [
      { code: 'MEX', name: 'Mexico City International', lat: 19.4363, lon: -99.0721 }
    ]
  },

  // Europe
  {
    name: 'London',
    country: 'UK',
    lat: 51.5074,
    lon: -0.1278,
    airports: [
      { code: 'LHR', name: 'Heathrow', lat: 51.4700, lon: -0.4543 },
      { code: 'LGW', name: 'Gatwick', lat: 51.1537, lon: -0.1821 },
      { code: 'STN', name: 'Stansted', lat: 51.8860, lon: 0.2389 },
      { code: 'LTN', name: 'Luton', lat: 51.8747, lon: -0.3683 }
    ]
  },
  {
    name: 'Paris',
    country: 'France',
    lat: 48.8566,
    lon: 2.3522,
    airports: [
      { code: 'CDG', name: 'Charles de Gaulle', lat: 49.0097, lon: 2.5479 },
      { code: 'ORY', name: 'Orly', lat: 48.7262, lon: 2.3652 }
    ]
  },
  {
    name: 'Frankfurt',
    country: 'Germany',
    lat: 50.1109,
    lon: 8.6821,
    airports: [
      { code: 'FRA', name: 'Frankfurt Airport', lat: 50.0379, lon: 8.5622 }
    ]
  },
  {
    name: 'Amsterdam',
    country: 'Netherlands',
    lat: 52.3676,
    lon: 4.9041,
    airports: [
      { code: 'AMS', name: 'Schiphol', lat: 52.3105, lon: 4.7683 }
    ]
  },
  {
    name: 'Madrid',
    country: 'Spain',
    lat: 40.4168,
    lon: -3.7038,
    airports: [
      { code: 'MAD', name: 'Adolfo Suárez Madrid–Barajas', lat: 40.4983, lon: -3.5676 }
    ]
  },
  {
    name: 'Barcelona',
    country: 'Spain',
    lat: 41.3874,
    lon: 2.1686,
    airports: [
      { code: 'BCN', name: 'Barcelona–El Prat', lat: 41.2974, lon: 2.0833 }
    ]
  },
  {
    name: 'Rome',
    country: 'Italy',
    lat: 41.9028,
    lon: 12.4964,
    airports: [
      { code: 'FCO', name: 'Leonardo da Vinci–Fiumicino', lat: 41.8003, lon: 12.2389 },
      { code: 'CIA', name: 'Ciampino', lat: 41.7994, lon: 12.5949 }
    ]
  },
  {
    name: 'Venice',
    country: 'Italy',
    lat: 45.4408,
    lon: 12.3155,
    airports: [
      { code: 'VCE', name: 'Venice Marco Polo', lat: 45.5053, lon: 12.3519 }
    ]
  },
  {
    name: 'Athens',
    country: 'Greece',
    lat: 37.9838,
    lon: 23.7275,
    airports: [
      { code: 'ATH', name: 'Athens International', lat: 37.9364, lon: 23.9445 }
    ]
  },
  {
    name: 'Prague',
    country: 'Czech Republic',
    lat: 50.0755,
    lon: 14.4378,
    airports: [
      { code: 'PRG', name: 'Václav Havel Airport Prague', lat: 50.1008, lon: 14.2632 }
    ]
  },
  {
    name: 'Vienna',
    country: 'Austria',
    lat: 48.2082,
    lon: 16.3738,
    airports: [
      { code: 'VIE', name: 'Vienna International', lat: 48.1103, lon: 16.5697 }
    ]
  },
  {
    name: 'Zurich',
    country: 'Switzerland',
    lat: 47.3769,
    lon: 8.5417,
    airports: [
      { code: 'ZRH', name: 'Zurich Airport', lat: 47.4647, lon: 8.5492 }
    ]
  },

  // Asia
  {
    name: 'Dubai',
    country: 'UAE',
    lat: 25.2048,
    lon: 55.2708,
    airports: [
      { code: 'DXB', name: 'Dubai International', lat: 25.2532, lon: 55.3657 },
      { code: 'DWC', name: 'Al Maktoum International', lat: 24.8967, lon: 55.1612 }
    ]
  },
  {
    name: 'Hong Kong',
    country: 'Hong Kong',
    lat: 22.3193,
    lon: 114.1694,
    airports: [
      { code: 'HKG', name: 'Hong Kong International', lat: 22.3080, lon: 113.9185 }
    ]
  },
  {
    name: 'Tokyo',
    country: 'Japan',
    lat: 35.6762,
    lon: 139.6503,
    airports: [
      { code: 'NRT', name: 'Narita International', lat: 35.7720, lon: 140.3929 },
      { code: 'HND', name: 'Tokyo Haneda', lat: 35.5494, lon: 139.7798 }
    ]
  },
  {
    name: 'Singapore',
    country: 'Singapore',
    lat: 1.3521,
    lon: 103.8198,
    airports: [
      { code: 'SIN', name: 'Singapore Changi', lat: 1.3644, lon: 103.9915 }
    ]
  },
  {
    name: 'Bangkok',
    country: 'Thailand',
    lat: 13.7563,
    lon: 100.5018,
    airports: [
      { code: 'BKK', name: 'Suvarnabhumi', lat: 13.6900, lon: 100.7501 },
      { code: 'DMK', name: 'Don Mueang International', lat: 13.9126, lon: 100.6069 }
    ]
  },
  {
    name: 'Delhi',
    country: 'India',
    lat: 28.7041,
    lon: 77.1025,
    airports: [
      { code: 'DEL', name: 'Indira Gandhi International', lat: 28.5562, lon: 77.1000 }
    ]
  },
  {
    name: 'Seoul',
    country: 'South Korea',
    lat: 37.5665,
    lon: 126.9780,
    airports: [
      { code: 'ICN', name: 'Incheon International', lat: 37.4602, lon: 126.4407 },
      { code: 'GMP', name: 'Gimpo International', lat: 37.5583, lon: 126.7906 }
    ]
  },
  {
    name: 'Beijing',
    country: 'China',
    lat: 39.9042,
    lon: 116.4074,
    airports: [
      { code: 'PEK', name: 'Beijing Capital International', lat: 40.0799, lon: 116.6031 },
      { code: 'PKX', name: 'Beijing Daxing International', lat: 39.5098, lon: 116.4105 }
    ]
  },

  // Oceania
  {
    name: 'Sydney',
    country: 'Australia',
    lat: -33.8688,
    lon: 151.2093,
    airports: [
      { code: 'SYD', name: 'Sydney Kingsford Smith', lat: -33.9399, lon: 151.1753 }
    ]
  },
  {
    name: 'Melbourne',
    country: 'Australia',
    lat: -37.8136,
    lon: 144.9631,
    airports: [
      { code: 'MEL', name: 'Melbourne Airport', lat: -37.6690, lon: 144.8410 }
    ]
  },
  {
    name: 'Auckland',
    country: 'New Zealand',
    lat: -36.8485,
    lon: 174.7633,
    airports: [
      { code: 'AKL', name: 'Auckland Airport', lat: -37.0082, lon: 174.7850 }
    ]
  },

  // South America
  {
    name: 'São Paulo',
    country: 'Brazil',
    lat: -23.5505,
    lon: -46.6333,
    airports: [
      { code: 'GRU', name: 'São Paulo/Guarulhos International', lat: -23.4356, lon: -46.4731 },
      { code: 'CGH', name: 'Congonhas Airport', lat: -23.6261, lon: -46.6564 }
    ]
  },
  {
    name: 'Rio de Janeiro',
    country: 'Brazil',
    lat: -22.9068,
    lon: -43.1729,
    airports: [
      { code: 'GIG', name: 'Rio de Janeiro–Galeão International', lat: -22.8099, lon: -43.2505 },
      { code: 'SDU', name: 'Santos Dumont Airport', lat: -22.9105, lon: -43.1631 }
    ]
  },
  {
    name: 'Buenos Aires',
    country: 'Argentina',
    lat: -34.6037,
    lon: -58.3816,
    airports: [
      { code: 'EZE', name: 'Ministro Pistarini International', lat: -34.8222, lon: -58.5358 },
      { code: 'AEP', name: 'Jorge Newbery Airpark', lat: -34.5592, lon: -58.4156 }
    ]
  },
  {
    name: 'Bogotá',
    country: 'Colombia',
    lat: 4.7110,
    lon: -74.0721,
    airports: [
      { code: 'BOG', name: 'El Dorado International', lat: 4.7016, lon: -74.1469 }
    ]
  },

  // Africa
  {
    name: 'Johannesburg',
    country: 'South Africa',
    lat: -26.2041,
    lon: 28.0473,
    airports: [
      { code: 'JNB', name: 'O.R. Tambo International', lat: -26.1367, lon: 28.2411 }
    ]
  },
  {
    name: 'Cairo',
    country: 'Egypt',
    lat: 30.0444,
    lon: 31.2357,
    airports: [
      { code: 'CAI', name: 'Cairo International', lat: 30.1219, lon: 31.4056 }
    ]
  },
];

// Helper functions
export const getCityByName = (name) => {
  return cities.find(c => c.name.toLowerCase() === name.toLowerCase());
};

export const getCitiesByCountry = (country) => {
  return cities.filter(c => c.country.toLowerCase() === country.toLowerCase());
};

export const getAirportCodes = (city) => {
  return city.airports.map(a => a.code);
};

// Legacy compatibility - keep old airports array for gradual migration
export const airports = cities.flatMap(city =>
  city.airports.map(airport => ({
    code: airport.code,
    city: city.name,
    country: city.country,
    lat: airport.lat,
    lon: airport.lon
  }))
);
