import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Register from './Pages/register'
import ShoppingCart from './Pages/ShoppingCart'
import HomeAdmin from './Pages/HomeAdmin'
import Sell from './Pages/Sell'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/Login' element={<Login />}></Route> 
          <Route path='/' element={<Home />}></Route>
          <Route path='/Register' element={<Register />}></Route>
          <Route path='/ShoppingCart' element={<ShoppingCart />}></Route>
          <Route path='/HomeAdmin' element={<HomeAdmin />}></Route>
          <Route path='/Sell' element={<Sell></Sell>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
