import { Routes, Route } from 'react-router-dom'
import './App.css';
import React from 'react'
import NavHeader from './components/Nav';
//import pages
import Home from './pages/home'
import About from './pages/about'
import Services from './pages/services';
import Contact from './pages/contact';
import Store from './pages/store';


export default function App() {
  return (
    <div className='App'>
      <NavHeader></NavHeader>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='services' element={<Services />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='store' element={<Store />}></Route>
      </Routes>
   
    </div>
  )
}
