import React from 'react'
import { Button } from '../ui/button'

const Navbar = () => {
  return (
    <div className='bg-[#338B63] border-b-2' >
        <div className='flex justify-between items-center max-w-7xl mx-auto px-5 h-20'>
            <h1 className='font-semibold text-3xl text-white'>Backset Brews</h1>
            <ul className='flex gap-10 text-white font-semibold text-lg items-center mobile-view'>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Contact</li>
                <li>
                <Button className="bg-[#E3FFE9] hover:bg-[#f7fff9] text-black text-md p-5">Reserve Now</Button>
                </li>
            </ul>


        </div>
    </div>
  )
}

export default Navbar