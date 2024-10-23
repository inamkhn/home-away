'use client'
import { BreadcrumbWithCustomSeparator } from '@/components/Breadcrumb/page'
import React, { useState } from 'react'
import { CircleCheckBig, Heart } from 'lucide-react'
import { FacebookShareButton, TwitterShareButton, InstapaperShareButton } from 'react-share'
import { FacebookIcon, TwitterIcon, InstapaperIcon } from 'react-share'
import { DayPicker, DateRange } from 'react-day-picker'
import './color.module.css'
import Location from './Location/page'
import { Button } from '../ui/button'
import Comment from '../Comment/page'

const SinglePropertiesPage = () => {
  const [color, setColor] = useState(false)
  const [range, setRange] = useState<DateRange | undefined>(undefined)
  const [show, setShow] = useState(false)
  // const shareUrl = 'https://example.com'
  console.log('range', range)

  const booked = true

  return (
    <div>
      <div className='mt-5'>
        <BreadcrumbWithCustomSeparator />
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center p-2'>
          <h1 className='pt-5 font-bold text-2xl sm:text-3xl'>Lorem Ipsum is simply dummy text</h1>
          <div className='mt-4 sm:mt-0'>
            <div className='bg-slate-50 p-2 right-3 rounded-xl flex items-center space-x-2'>
              <FacebookShareButton url={'https://peing.net/ja/'} hashtag={'#hashtag'}>
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <TwitterShareButton title={'test'} url={'https://peing.net/ja/'} hashtags={['hashtag1', 'hashtag2']}>
                <TwitterIcon size={32} round />
              </TwitterShareButton>
              <InstapaperShareButton title={'test'} url={'https://peing.net/ja/'}>
                <InstapaperIcon size={32} round />
              </InstapaperShareButton>
              <Heart color={!color ? '#000000' : '#dc1818'} onClick={() => setColor(!color)} />
            </div>
          </div>
        </div>
        <img src='/images/tent-1.jpg' alt='' className='w-full object-cover max-h-[400px]' />

        <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 p-5'>
          <div className='lg:col-span-3'>
            <p className='text-lg sm:text-xl font-bold'>Caravan in Tongo</p>
            <span className='text-sm font-light'>1 bedroom - 1 bath - 1 guest - bed</span>
            <div className='py-2 flex space-x-2 items-center'>
              <img src='/images/0-user-peter.jpg' alt='' className='w-10 h-10 sm:w-12 sm:h-12 rounded-full' />
              <div>
                <p className='text-lg sm:text-xl font-medium'>John Peter</p>
                <span className='text-xs sm:text-sm font-light'>5 months ago</span>
              </div>
            </div>
            {/* create a line break */}
            <hr className='w-full sm:w-[800px]' />
            <div className='my-2 space-y-2'>
              <p className='text-lg sm:text-xl font-bold'>Description</p>
              <p className='text-sm sm:w-[700px] font-light'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Quisquam, quod.
              </p>
            </div>
            <div className='my-2 space-y-2'>
              <p className='text-lg sm:text-xl font-bold'>What this place offers</p>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-light'>
                <div className='flex space-x-2 items-center'>
                  <CircleCheckBig color='#f0cb14' />
                  <p className=''>Outdoor furniture (Tree Stumps)</p>
                </div>
                <div className='flex space-x-2 items-center'>
                  <CircleCheckBig color='#f0cb14' />
                  <p className=''>Outdoor furniture (Tree Stumps)</p>
                </div>
              </div>
            </div>
            {/* location */}
            <Location />
            {/* add booking button */}

            {booked ? (
              <div className='my-2 space-y-2' onClick={() => setShow(!show)}>
                <Button className=' bg-orange-400 rounded-lg'>{show ? "Close": "Add Review"}</Button>
              </div>
            ) : (
              <div className='my-2 space-y-2'>
                <Button className=' bg-orange-400 rounded-lg'>Book Now</Button>
              </div>
            )}
            {show && <Comment />}
          </div>
          <div className='lg:col-span-1'>
            <DayPicker mode='range' selected={range} onSelect={setRange} className='w-full' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePropertiesPage
