'use client'
/* eslint-disable @next/next/no-img-element */
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Star, MapPin,Heart } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
type Property = {
  id: number
  image: string
  title: string
  description: string
  price_per_night: number
  rating: number
  reviews: number
  country: string
}

export default function CardPage({id,image, title, description, price_per_night, rating, reviews, country }: Property) {
  const [color,setColor] = useState(false)
  return (
    <Card className='max-w-sm overflow-hidden'>
      <CardHeader className='p-0 relative'>
        <img src={image} alt={title} className='w-full h-48 object-cover' />
        <div className='absolute bg-slate-50 p-1 right-3 rounded-xl'>
        <Heart color={!color? '#000000' : '#dc1818'} onClick={() => setColor(!color)} />
        </div>
      </CardHeader>
      <Link href={`/properties/${id}`}>
      <CardContent className='p-4'>
        <h2 className='text-xl font-semibold mb-2'>{title}</h2>
        <p className='text-sm text-gray-600 mb-4'>{description.substring(0,75)}</p>
        <div className='flex items-center mb-4'>
          <Star className='w-5 h-5 text-yellow-400 fill-current' />
          <span className='ml-1 font-semibold'>{rating}</span>
          <span className='ml-1 text-sm text-gray-600'>({reviews} reviews)</span>
        </div>
        <div className='flex items-center text-sm text-gray-600'>
          <MapPin className='w-4 h-4 mr-1' />
          {country}
        </div>
      </CardContent>
      <CardFooter className='px-4 py-3  flex justify-between items-center'>
        <span className='text-xl font-bold'>${price_per_night}</span>
        <span className='text-sm text-gray-600'>per night</span>
      </CardFooter>
      </Link>
    </Card>
  )
}
