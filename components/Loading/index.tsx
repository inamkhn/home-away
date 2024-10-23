import React from 'react'

interface Props {
  size?: 'sm' | 'md' | 'lg'
  color?: 'blue' | 'green' | 'red' | 'yellow'
}

const Loading = ({ size = 'md', color = 'blue' }: Props) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  }

  const colorClasses = {
    blue: 'border-blue-500',
    green: 'border-green-500',
    red: 'border-red-500',
    yellow: 'border-yellow-500',
  }

  return (
    <div className='flex justify-center items-center'>
      <div
        className={`
          ${sizeClasses[size]} 
          ${colorClasses[color]} 
          border-4 
          border-t-transparent 
          rounded-full 
          animate-spin
        `}></div>
    </div>
  )
}

export default Loading
