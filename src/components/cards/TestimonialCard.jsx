import { Quote } from 'lucide-react'
import React from 'react'

const TestimonialCard = () => {
  return (
    <div className='w-full md:w-[30%] bg-white px-10 md:px-5 p-5 shadow-md rounded-2xl my-10' >
        <div className='w-full flex justify-between items-center' >
            <img className='rounded-full  w-20' src="../src/assets/testimonial.jpg" />
            <Quote color='#5EC8A5' size={40} />
        </div>
        <div className='flex gap- flex-col my-5'>
            <p className='font-semimedium text-lg mb-5'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."</p>
            <h1 className='font-bold text-xl'>John Doe</h1>
            <h3 className='text-[#5EC8A5] font-semibold '>Customer</h3>
        </div>
    </div>
  )
}

export default TestimonialCard