import React, { useState } from 'react';
import { Card } from '@/components/ui/card';

interface Guests {
  name: string;
  description: string;
  total: number;  // Change type to number for easier manipulation
  onChange: (newValue: number) => void; // Function to update total
}

const GuestCard = ({ name, description, total, onChange }: Guests) => {
  const handleIncrement = () => {
    const newTotal = total + 1;
    onChange(newTotal);  // Trigger the onChange callback to update the form state
  };

  const handleDecrement = () => {
    const newTotal = total > 0 ? total - 1 : 0;  // Ensure total doesn't go below 0
    onChange(newTotal);  // Trigger the onChange callback
  };

  return (
    <div>
      <Card>
        <div className='flex justify-between items-center p-3'>
          <div>
            <p className='font-bold text-xl'>{name}</p>
            <p className='text-sm'>{description}</p>
          </div>
          <div className='flex items-center space-x-3'>
            <div
              className='px-2 ring-1 ring-slate-500 cursor-pointer'
              onClick={handleIncrement}  // Increment button
            >
              +
            </div>
            <div className='font-bold'>{total}</div>
            <div
              className='px-2 ring-1 ring-slate-500 cursor-pointer'
              onClick={handleDecrement}  // Decrement button
            >
              -
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default GuestCard;
