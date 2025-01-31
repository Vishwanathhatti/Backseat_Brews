import React from 'react'
import Menu from '../cards/Menu'
import MenuPageCard from '../cards/MenuPageCard'

const drinks =[
    {
        name:'Cappuccino',
        price:'$4.99',
    },
    {
        name:'Latte',
        price:'$4.99',
    },
    {
        name:'Espresso',
        price:'$4.99',
    },
    {
        name:'Mocha',
        price:'$4.99',
    },
    {
        name:'Americano',
        price:'$4.99',
    },
    {
        name:'Macchiato',
        price:'$4.99',
    },
    {
        name:'Flat White',
        price:'$4.99',
    },
    {
        name:'Affogato',
        price:'$4.99',
    },
]

const MenuPage = () => {
    return (
        <div className=' w-full'>
            <div className='w-full bg-[#338B63] min-h-[50vh]  mx-auto flex flex-wrap justify-center items-center p-16 md:p-5 md:py-20 ' >

                <h1 className='text-5xl md:text-6xl font-semibold text-white'>Menu</h1>
                
            </div>

            <div className='w-full hero-section-svg'></div>

            <h1 className='capitalize text-4xl font-bold text-center my-10' >Snacks & drinks while you have fun.</h1>

            
            <div className='flex flex-wrap gap-7 max-w-7xl mx-auto justify-center items-center p-10'>
            <MenuPageCard title="Drinks" menu={drinks} color="#E3FFE9" />
            <MenuPageCard title="Drinks" menu={drinks} color="white" />
            <MenuPageCard title="Drinks" menu={drinks} color="#E3FFE9" />
            <MenuPageCard title="Drinks" menu={drinks} color="white" />
            <MenuPageCard title="Drinks" menu={drinks} color="#E3FFE9" />
            <MenuPageCard title="Drinks" menu={drinks} color="white" />



            </div>

        
        </div>

    )
}

export default MenuPage