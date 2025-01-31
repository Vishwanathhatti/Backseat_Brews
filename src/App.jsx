import { useState } from 'react'
import './App.css'
import Homepage from './components/pages/Homepage'
import Navbar from './components/shared/Navbar'
import Home from './components/pages/Home'
import Footer from './components/shared/Footer'
import { Route, Routes } from 'react-router-dom'
import MenuPage from './components/pages/MenuPage'

function App() {


  return (
    <>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<MenuPage/>}/>
      </Routes>
      
      <Footer/>
    </>
  )
}

export default App
