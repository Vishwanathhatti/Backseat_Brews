import React from 'react'

const Menu = ({title, menu, color}) => {
  return (
    <div className={`w-full md:w-[31%] flex flex-col p-4 rounded-2xl bg-[${color}] md:hover:scale-110 transition-transform duration-300`} >
        <h1 className='text-center font-bold text-xl'>{title}</h1>
        <ul>
            {menu.map((item, index) => (
                <li key={index} className='flex justify-between items-center p-2 w-full font-semibold'>
                    <p >{item.name}</p>
                    <p>{item.price}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Menu