import React from 'react'
import { Property } from '@/app/types/page'
import CardPage from '@/components/Card/page'

const Bookings = () => {
  const properties: Property[] = [
    {
      id: 1,
      image: '/images/cabin-1.jpg',
      title: 'Mountain View Resort',
      description:
        'Enjoy a luxurious stay with stunning mountain views. Amenities include free Wi-Fi, outdoor swimming pool, spa, fitness center, 24-hour room service, and complimentary breakfast.',
      price_per_night: 150,
      rating: 4.8,
      reviews: 320,
      country: 'Switzerland',
    },
    {
      id: 2,
      image: '/images/cabin-2.jpg',
      title: 'Beachfront Paradise',
      description:
        'A perfect getaway by the sea. Amenities include private beach access, beachfront restaurant, infinity pool, complimentary snorkeling gear, and free airport transfers.',
      price_per_night: 200,
      rating: 4.7,
      reviews: 275,
      country: 'Maldives',
    },
    {
      id: 3,
      image: '/images/cabin-3.jpg',
      title: 'City Lights Hotel',
      description:
        'Stay in the heart of the city with top-notch amenities. Enjoy free high-speed internet, rooftop bar, business center, on-site parking, and 24/7 concierge service.',
      price_per_night: 180,
      rating: 4.5,
      reviews: 400,
      country: 'USA',
    },
    {
      id: 4,
      image: '/images/cabin-4.jpg',
      title: 'Countryside Inn',
      description:
        'Relax in this charming countryside inn offering cozy rooms with free breakfast, complimentary tea and coffee, walking trails, free parking, and bike rentals.',
      price_per_night: 90,
      rating: 4.3,
      reviews: 150,
      country: 'United Kingdom',
    },
  ]
  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-3'>
        {properties.map((property) => (
          <CardPage key={property.id} {...property} />
        ))}
      </div>
    </div>
  )
}

export default Bookings
