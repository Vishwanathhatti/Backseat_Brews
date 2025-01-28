import React from 'react'
import Homepage from './Homepage'
import Info from '../Info'
import Menu from '../cards/Menu'
import { Button } from '../ui/button'
import HomeHeroSection from '../HomeHeroSection'
import SnookerInfo from '../SnookerInfo'
import Testimonials from '../Testimonials'

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

const Home = () => {
  return (
    <div>
        <Homepage/>
        <Info/>
        <div className='w-full my-10'>
            <h1 className='text-center text-5xl font-bold '>Our Menu</h1>
        <div className='flex flex-wrap gap-3 max-w-7xl mx-auto justify-between items-center p-4'>
            <Menu title="Drinks" menu={drinks} color="#E3FFE9" />
            <Menu title="Drinks" menu={drinks} color="white" />
            <Menu title="Drinks" menu={drinks} color="#E3FFE9" />
        </div>
        <div className='w-full flex justify-center items-center my-3'>
        <Button className="bg-amber-400 hover:bg-green-300 text-black" > View More </Button>    
        </div>    
        </div>
        <HomeHeroSection/>
        <SnookerInfo/>
        <Testimonials/>
    </div>
  )
}

export default Home