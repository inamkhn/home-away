'use client'
import * as React from 'react'
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { AlignJustify, CircleUserRound } from 'lucide-react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import {DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Input } from "@/components/ui/input"
import Link from 'next/link'
type Checked = DropdownMenuCheckboxItemProps['checked']

const Navbar = () => {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
  const [showPanel, setShowPanel] = React.useState<Checked>(false)
  const { setTheme } = useTheme()
  return (
    <div>
      <div className='flex justify-between items-center py-5'>
        <h1 className='text-2xl font-bold'>HomeAway</h1>
        <div>
        <Input type="email" placeholder="find a property" className='sm:w-[200px] md:w-[300px] lg:w-[400px] rounded-full' />
        </div>
        <div className='flex items-center space-x-4'>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='outline' className='rounded-full' size='icon'>
                  <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
                  <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
                  <span className='sr-only'>Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className='flex items-center space-x-1 ring-1 hover:shadow-lg ring-slate-300 px-2 py-1 rounded-full'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <AlignJustify />
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-48 mt-3 bg-white dark:bg-gray-800'>
                <DropdownMenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar} className=''>
                  Home
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={showActivityBar} onCheckedChange={setShowActivityBar}>
                  <Link href='/favorites'>Favorites</Link>
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
                  Bookings
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
                  <Link href='/reviews'>Reviews</Link>
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
                 <Link href='/reservations'>Reservations</Link> 
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
                  Create rental
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
                  <Link href='/myRental'>My rental</Link> 
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
                  <Link href='/profile'>Profile</Link>
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
                  Logout
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <CircleUserRound size={42} strokeWidth={0.5} />
          </div>
        </div>
      </div>
      <div className='w-full h-[1px] bg-slate-300'></div>
    </div>
  )
}

export default Navbar
