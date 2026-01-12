// Generate mock flight data based on origin and destination
export const generateMockFlights = (fromCode, toCode, departureDate) => {
  const carriers = [
    'Delta Airlines',
    'United Airlines',
    'American Airlines',
    'Lufthansa',
    'British Airways',
    'Emirates',
    'Air France',
    'KLM',
    'Singapore Airlines',
    'Qatar Airways'
  ];

  const flights = [];
  const numFlights = 5 + Math.floor(Math.random() * 5); // 5-10 flights

  for (let i = 0; i < numFlights; i++) {
    const carrier = carriers[Math.floor(Math.random() * carriers.length)];
    const basePrice = 150 + Math.random() * 800;
    const price = Math.round(basePrice);

    // Generate departure times throughout the day
    const hour = Math.floor(Math.random() * 24);
    const minute = Math.random() < 0.5 ? '00' : '30';
    const departureTime = `${hour.toString().padStart(2, '0')}:${minute}`;

    // Flight duration between 1-15 hours
    const durationHours = Math.floor(1 + Math.random() * 14);
    const durationMinutes = Math.floor(Math.random() * 60);
    const duration = `${durationHours}h ${durationMinutes}m`;

    // Calculate arrival time (simplified, doesn't account for timezone)
    const arrivalHour = (hour + durationHours + Math.floor((Number(minute) + durationMinutes) / 60)) % 24;
    const arrivalMinute = ((Number(minute) + durationMinutes) % 60).toString().padStart(2, '0');
    const arrivalTime = `${arrivalHour.toString().padStart(2, '0')}:${arrivalMinute}`;

    const stops = Math.random() < 0.7 ? 0 : Math.random() < 0.8 ? 1 : 2;

    flights.push({
      id: `${fromCode}-${toCode}-${i}`,
      carrier,
      flightNumber: `${carrier.substring(0, 2).toUpperCase()}${Math.floor(1000 + Math.random() * 9000)}`,
      from: fromCode,
      to: toCode,
      departureDate,
      departureTime,
      arrivalTime,
      duration,
      stops,
      price,
      currency: 'USD',
      seatsAvailable: Math.floor(5 + Math.random() * 50)
    });
  }

  // Sort by price
  return flights.sort((a, b) => a.price - b.price);
};
