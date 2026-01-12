# Ariadne - Multi-City Travel Planner

A modern web application for planning complex, multi-city trips with an intuitive map-based interface.

## Overview

Ariadne solves the hassle of creating multi-city trip itineraries by providing a single interface to:
- Select departure and destination cities on an interactive map
- Search and compare flights between cities
- Find and book accommodations with filters
- Create detailed daily itineraries for each destination
- Visualize your entire trip route on a map

## Features

- **Interactive Map**: Click on city markers to select departure/destination cities
- **Flight Search**: Browse mock flight options with prices, carriers, and flight times
- **Hotel Search**: Filter hotels by price, rating, and stars
- **Itinerary Planning**: Create custom day-by-day plans for each city
- **Multi-Leg Trips**: Add as many destinations as you want
- **Visual Trip Summary**: See your complete journey with all bookings

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Leaflet** - Interactive maps
- **React-Leaflet** - React bindings for Leaflet

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:3000`

## Usage

1. **Start Planning**: Search for or click on a departure city on the map
2. **Select Destination**: Choose your first destination city
3. **Pick a Date**: Select your departure date
4. **Choose Flight**: Browse and select from available flights (currently using mock data)
5. **Select Hotel**: Use filters to find the perfect accommodation
6. **Set Duration**: Specify how many nights you'll stay
7. **Plan Activities**: Create a day-by-day itinerary
8. **Add More Destinations**: Click "Add Next Destination" to continue your journey
9. **Finish**: Click "Finish Trip" when done to see your complete itinerary

## Current State

This is an MVP with working UI and mock data. The following features are ready:

- ✅ Interactive map with 38+ major cities worldwide
- ✅ City search with autocomplete
- ✅ Mock flight search with realistic data
- ✅ Mock hotel search with filters
- ✅ Itinerary editor
- ✅ Multi-leg trip planning
- ✅ Visual trip routes on map

## Next Steps

To make this production-ready, the following integrations are needed:

1. **Flight API Integration**: Replace mock data with real flight search API (e.g., Travelpayouts)
2. **Hotel API Integration**: Connect to hotel booking APIs (e.g., Booking.com API)
3. **Backend**: Add user authentication and save trips to database
4. **Payment Processing**: Integrate payment gateway for actual bookings
5. **User Accounts**: Allow users to save and manage multiple trips
6. **Email Notifications**: Send itinerary confirmations and updates
7. **Mobile Responsive**: Optimize UI for mobile devices
8. **Export Features**: Allow exporting itinerary as PDF or calendar events

## Project Structure

```
ariadne/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Map.jsx
│   │   ├── Sidebar.jsx
│   │   ├── FlightSearch.jsx
│   │   ├── HotelSearch.jsx
│   │   ├── ItineraryEditor.jsx
│   │   └── CitySelector.jsx
│   ├── data/           # Mock data and constants
│   │   ├── airports.js
│   │   ├── mockFlights.js
│   │   └── mockHotels.js
│   ├── App.jsx         # Main application component
│   ├── App.css         # Global styles
│   └── main.jsx        # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## License

MIT