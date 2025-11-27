import React from 'react'
import Navbar from './Components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Detail from './Pages/Detail'
import Favorites from './Pages/Favorites'
import Loginpage from './Pages/Loginpage'
import Signup from './Pages/Signup'
import Tv from './Pages/Tv'
import Watchlist from './Pages/Watchlist'
import Movies from './Pages/Movies'
import Seemore from './Pages/Seemore'
import './App.css'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/details/:id' element={<Detail/>} />
        <Route path='/favorites' element={<Favorites/>} />
        <Route path='/login' element={<Loginpage/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/tv' element={<Tv/>} />
        <Route path='/watchlist' element={<Watchlist/>} />
        <Route path='/seemore/:type' element={<Seemore/>} />
      </Routes>
    </>
  )
}

export default App
