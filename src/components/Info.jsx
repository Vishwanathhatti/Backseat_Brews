import React from 'react'
import { Button } from './ui/button'

const Info = () => {
  return (
    <div className='w-full shadow-white shadow-lg '>
        <div className='max-w-7xl min-h-screen mx-auto flex flex-wrap justify-center items-center ' >
            <div className='w-full md:w-1/2 p-5 flex flex-col gap-4'>
                <h3 className='text-[#338B63] text-lg font-bold'>Have Fun With Friends</h3>
                <h1 className='text-3xl font-semibold '>The Best Happy Hour Is At BackSeat Brews</h1>
                <div className='flex flex-col gap-7'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, recusandae accusamus commodi debitis sed omnis. Impedit fugit, et consequuntur cumque possimus, pariatur mollitia officia aliquid dolor dignissimos reiciendis accusamus quo!</p>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque voluptatum ullam similique, eum, ratione reprehenderit laborum consequuntur ad, corporis et ea? Obcaecati omnis ipsa aut at delectus repellat qui quas!</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repudiandae autem dolore minima sed. Quos, quaerat dolore veritatis possimus eaque, perspiciatis fugit odio quisquam illum, officia magnam sunt reprehenderit ratione.</p>
                </div>
                <Button className="w-32  bg-amber-400 hover:bg-[#a5fdb8] text-black">Reserve Now</Button>
            </div>
            <div className='flex flex-wrap w-full md:w-1/2 p-5 gap-3'>
                  <div className='w-full' ><img className='rounded-xl w-full h-80 object-cover' src='../src/assets/friend-group.jpg' /></div>
                  <div className='w-full  flex gap-3 justify-between flex-wrap'>
                    <img className='w-[48%] h-80 object-cover rounded-lg' src='../src/assets/solo.jpg' />
                    <img className='w-[48%] h-80 object-cover rounded-lg' src='../src/assets/pizza.jpg' />
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Info