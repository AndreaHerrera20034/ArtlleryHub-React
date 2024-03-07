<<<<<<< HEAD
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Register from './Pages/register'
import ShoppingCart from './Pages/ShoppingCart'
import HomeAdmin from './Pages/HomeAdmin'
import Sell from './Pages/Sell'

=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Register from "./Pages/register";
import ShoppingCart from "./Pages/ShoppingCart";
import HomeAdmin from "./Pages/HomeAdmin";
import Perfil from "./Pages/perfil";
>>>>>>> evelynDev

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          <Route path='/Login' element={<Login />}></Route> 
          <Route path='/' element={<Home />}></Route>
          <Route path='/Register' element={<Register />}></Route>
          <Route path='/ShoppingCart' element={<ShoppingCart />}></Route>
          <Route path='/HomeAdmin' element={<HomeAdmin />}></Route>
          <Route path='/Sell' element={<Sell></Sell>}></Route>
=======
          <Route path="/" element={<Login />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/ShoppingCart" element={<ShoppingCart />}></Route>
          <Route path="/HomeAdmin" element={<HomeAdmin />}></Route>
          <Route path="/Perfil" element={<Perfil />}></Route>
>>>>>>> evelynDev
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
