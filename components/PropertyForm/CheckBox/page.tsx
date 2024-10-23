'use client'

import { Checkbox } from '@/components/ui/checkbox'

type LabelType = {
  label: string
  checked: boolean
  onChange: () => void // Changed this line
}

export function MyCheckbox({ label, checked, onChange }: LabelType) {
  return (
    <div className='flex items-center space-x-2'>
      <Checkbox id={label} checked={checked} onCheckedChange={onChange} />
      <label
        htmlFor={label}
        className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
        {label}
      </label>
    </div>
  )
}
