// Generate mock hotel data for a given city
export const generateMockHotels = (cityCode) => {
  const hotelChains = [
    'Hilton', 'Marriott', 'Hyatt', 'InterContinental', 'Holiday Inn',
    'Radisson', 'Sheraton', 'Westin', 'Crown Plaza', 'Best Western'
  ];

  const hotelTypes = [
    'Hotel', 'Resort', 'Inn', 'Suites', 'Grand Hotel', 'Plaza'
  ];

  const amenities = [
    'Free WiFi', 'Breakfast Included', 'Pool', 'Gym', 'Spa',
    'Restaurant', 'Bar', 'Room Service', 'Parking', 'Airport Shuttle',
    'Pet Friendly', 'Business Center', 'Concierge'
  ];

  const hotels = [];
  const numHotels = 12 + Math.floor(Math.random() * 8); // 12-20 hotels

  for (let i = 0; i < numHotels; i++) {
    const chain = hotelChains[Math.floor(Math.random() * hotelChains.length)];
    const type = hotelTypes[Math.floor(Math.random() * hotelTypes.length)];
    const stars = Math.floor(2 + Math.random() * 3.5); // 2-5 stars
    const rating = (7 + Math.random() * 3).toFixed(1); // 7.0-10.0 rating
    const pricePerNight = Math.round(50 + Math.random() * 400);

    // Random location (distance from city center in km)
    const distanceFromCenter = (Math.random() * 10).toFixed(1);

    // Random amenities (3-8 amenities per hotel)
    const numAmenities = 3 + Math.floor(Math.random() * 6);
    const hotelAmenities = [];
    const shuffledAmenities = [...amenities].sort(() => Math.random() - 0.5);
    for (let j = 0; j < numAmenities; j++) {
      hotelAmenities.push(shuffledAmenities[j]);
    }

    hotels.push({
      id: `hotel-${cityCode}-${i}`,
      name: `${chain} ${type}`,
      stars,
      rating: parseFloat(rating),
      reviews: Math.floor(100 + Math.random() * 2000),
      pricePerNight,
      currency: 'USD',
      distanceFromCenter: parseFloat(distanceFromCenter),
      amenities: hotelAmenities,
      // Simulate location near the city (offset from city center)
      lat: null, // Will be set based on city coordinates + random offset
      lon: null,
      imageUrl: `https://via.placeholder.com/300x200?text=${encodeURIComponent(chain)}`
    });
  }

  // Sort by rating (highest first)
  return hotels.sort((a, b) => b.rating - a.rating);
};
