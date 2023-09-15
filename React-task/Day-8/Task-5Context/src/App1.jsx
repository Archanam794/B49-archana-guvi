import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Cartcard from './Cartcard'
import NavBar from './NavBar'

function App1() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/cart' element={<Cartcard/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App1