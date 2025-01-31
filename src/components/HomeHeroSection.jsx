import React from 'react';

const HomeHeroSection = () => {
  return (
    <div className="my-10">
      
      <div className="bg-gradient-to-b from-[#CCFBA8] to-[#6ACDA5] rounded-l-lg max-w-7xl  mx-auto flex flex-wrap items-center p-4 md:p-0 ">
        {/* Image Section */}
        <div className=" flex justify-center items-center w-full md:w-[40%] max-h-[600px] overflow-hidden rounded-lg md:rounded-l-lg">
          <img
            className="object-contain w-full "
            src="../src/assets/balls.jpg"
            alt="Decorative"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-[50%] mx-auto flex flex-col justify-center  gap-5">

            <h1 className="text-emerald-500 font-bold mb-5">About Backseat Brews</h1>
            
            <h1 className="text-4xl font-bold text-black">Come & experience one of the best sports in the world</h1>
            
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit mollitia blanditiis, pariatur obcaecati harum cumque, ratione atque dicta, dolor totam iste facilis. Cumque ratione praesentium id excepturi reiciendis libero rem?</p>
            
            <div className='w-full flex flex-wrap gap-3 justify-center items-center'>
                <div className='flex flex-col md:text-center rounded-3xl w-full lg:w-[30%] justify-center items-center p-5 bg-white'>
                    <span className='text-emerald-500 font-bold' >01.</span>
                    <h3 className='text-2xl font-bold'>Just Relax</h3>
                    <p>Just Relax and enjoy your time</p>
                </div>
                <div className='flex flex-col text-center rounded-3xl w-full lg:w-[30%] justify-center items-center p-5 bg-white'>
                    <span className='text-emerald-500 font-bold' >02.</span>
                    <h3 className='text-2xl font-bold'>Eat Well</h3>
                    <p>Eat our Delicious and healthy food</p>
                </div>
                <div className='flex flex-col text-center rounded-3xl w-full lg:w-[30%] justify-center items-center p-5 bg-white'>
                    <span className='text-emerald-500 font-bold' >03.</span>
                    <h3 className='text-2xl font-bold'>Friends</h3>
                    <p>Enjoy every moment with your Friends</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
