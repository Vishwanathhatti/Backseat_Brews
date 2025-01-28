import React from 'react'
import TestimonialCard from './cards/TestimonialCard'

const Testimonials = () => {
  return (
    <div className='w-full my-10 bg-[#FAFBFB]'>
        <div className='max-w-7xl mx-auto flex flex-col justify-center items-center p-5' >
            <h1 className='text-2xl font-bold text-[#5EC8A5]'>Testimonials</h1>
            <p className='my-3 text-4xl font-bold' >Reviews From Our Actual Customers</p>
            
            <div className='w-full flex flex-wrap p-4 justify-between items-center'>
                <TestimonialCard/>
                <TestimonialCard/>
                <TestimonialCard/>

            </div>
        </div>
        
    </div>
  )
}

export default Testimonials