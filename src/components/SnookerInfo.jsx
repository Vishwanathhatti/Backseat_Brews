import React from 'react'
const timings=[
  {
    day:'Monday',
    start:'',
    end:'Holiday',
  },
  {
    day:'Tuesday',
    start:'17:00 PM',
    end:'10:00 PM',
  },
  {
    day:'Wednesday',
    start:'17:00 PM',
    end:'10:00 PM',
  },
  {
    day:'Thursday',
    start:'17:00 PM',
    end:'10:00 PM',
  },
  {
    day:'Friday',
    start:'17:00 PM',
    end:'10:00 PM',
  },
  {
    day:'Saturday',
    start:'17:00 PM',
    end:'10:00 PM',
  },
  {
    day:'Sunday',
    start:'17:00 PM',
    end:'10:00 PM',
  },
]

const SnookerInfo = () => {

  return (
    <div className='w-full my-10 background-image'>
      <div className='w-full snooker-info-svg p-5'>
        <div className='max-w-7xl mx-auto flex flex-col  gap-6 '>
            <h3 className='text-[#5EC8A5] font-bold '>Come and meet us</h3>
            <h1 className='text-3xl font-bold '>Check Our Opening Hours</h1>
            <p className='font-medium'>Note: We are closed during National Holiday's And Monday's</p>
        </div>
      </div>  
      <div className='w-full transform -translate-y-48'>
          <div className='max-w-7xl mx-auto flex md:flex-row-reverse flex-wrap gap-5 justify-center items-center p-4 '>
              <div className='w-full md:w-[48%] order-2 '>
                <img className='w-full rounded-3xl' src="../src/assets/timing-2.jpg" />
              </div>
              <div className='w-full md:w-[48%] mb-10 order-1 '>
                  <div className='bg-white p-5 py-10 flex flex-col gap-5 justify-center items-center rounded-3xl'> 
                    <h1 className='text-3xl font-bold ' >Come have fun after a hard day's work</h1>
                    {
                      timings.map((time,index)=>(
                        <div key={index} className='w-full flex justify-between items-center p-3 '>
                          <h3 className='font-semibold'>{time.day}</h3>
                          <p>{time.start} - {time.end}</p>
                        </div>
                      ))
                    }
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default SnookerInfo