import React from 'react'
import Home from './components/Home'
import Item from './components/Item'
import './components/styles.css'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'


export default function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/item/:id" element={<Item />} />
      </Routes>
    </div>
  )
}
