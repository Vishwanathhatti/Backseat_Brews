import React, { useState, useEffect } from 'react';

const MenuPageCard = ({ title, menu, color }) => {
    const [borderColor, setBorderColor] = useState('');

    useEffect(() => {
        if (color !== '#E3FFE9') {
            setBorderColor('#E3FFE9');
        }
        else{
            setBorderColor('white')
        }
    }, [color]);

    return (
        <div className="w-[90%] md:w-[30%] flex flex-col justify-between items-center p-10 gap-5 rounded-3xl relative my-16"
            style={{ backgroundColor: color }}>
            
            <div className="w-full flex flex-col justify-center items-center gap-2">
                <div className="absolute flex flex-col justify-center items-center top-0 translate-y-[-40%]">
                    <div className=" h-40 w-40 rounded-full border-[9px]" 
                        style={{ borderColor: borderColor }}>
                        <img className="h-full w-full rounded-full object-cover"
                            src="https://images.pexels.com/photos/792613/pexels-photo-792613.jpeg" />
                    </div>
                    <h1 className="text-3xl font-bold">{title}</h1>
                </div>
            </div>

            <div className="mt-12"></div>

            {menu.map((item, index) => (
                <div key={index} className=" w-full flex justify-between ">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <h3 className="text-lg font-semibold">{item.price}</h3>
                </div>
            ))}
        </div>
    );
}

export default MenuPageCard;
