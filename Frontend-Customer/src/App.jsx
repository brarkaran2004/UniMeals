
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import Menu from './components/Menu.jsx';
import Navbar from './components/Navbar.jsx';
import { Card } from '@mui/material';
import RestaurantCard from './components/RestrauntCard.jsx';
import Homepage from './components/Homepage.jsx';
import { Routes, Route } from 'react-router-dom';
import Cart from './components/Cart.jsx';
import { useState } from 'react';



function App() {
  

  return (
    <>
      {/* <SignUp />
      <Menu /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/menu/:restaurantid" element={<Menu />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
      
      
    </>
  )
}

export default App
