import React from 'react'
import { Button } from '../ui/button'

const Homepage = () => {
    return (
        <div className=' bg-[#338B63]'>
            
            <div className='max-w-7xl   mx-auto flex flex-wrap justify-center items-center p-5 md:py-20' >
                <div className='w-full md:w-1/2 p-5 flex flex-col gap-4'>
                <h1 className='text-white font-bold text-4xl md:text-6xl'>Welcome to Backseat Brews</h1>
                <h3 className='text-white font-semibold text-2xl md:text-4xl'>The Best Place To Play Snooker.</h3>
                <Button className="w-28 p-6 bg-amber-400 hover:bg-amber-500 text-black">Read More</Button>
                </div>

                <div className='w-full md:w-1/2 p-5'>
                    <img src='../src/assets/snooker.png' alt='snooker table' className='w-full h-full object-cover'/>
                </div>

            </div>

            {/* Using SVG for Curve Shape effect */}
            <div className='w-full h-16 svg-code' ></div>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="#338B63"><rect fill="#FFF" width="100%" height="100%"/><path d="M0 0v90.2C49.7 99.9 105 82 160 65c75.5-23.3 145.5-22.4 222-3 63 16 119 14 173-8 79.5-32.4 156.2-27.6 240-10 82.6 17.4 143-1 205-31.7V0H0Z"></path></svg> */}
        </div>
    )
}

export default Homepage