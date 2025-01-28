import { useState } from 'react'
import './App.css'
import Homepage from './components/pages/Homepage'
import Navbar from './components/shared/Navbar'
import Home from './components/pages/Home'
import Footer from './components/shared/Footer'

function App() {


  return (
    <>
      <Navbar/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
