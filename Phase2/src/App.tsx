import React,{ Suspense, lazy } from 'react'
import Navbar from './Components/Navbar'
import {Routes,Route} from 'react-router-dom'
import ProtectedRoute from './Components/ProtectedRoute'
import { Box } from "@mui/material";


const Homepage = lazy(() => import("./Pages/Homepage"));
const Detail = lazy(() => import("./Pages/Detail"));
const Favorites = lazy(() => import("./Pages/Favorites"));
const Loginpage = lazy(() => import("./Pages/Loginpage"));
const Signup = lazy(() => import("./Pages/Signup"));
const Tv = lazy(() => import("./Pages/Tv"));
const Watchlist = lazy(() => import("./Pages/Watchlist"));
const Movies = lazy(() => import("./Pages/Movies"));
const Seemore = lazy(() => import("./Pages/Seemore"));


function App() {
  return (
    <>
      <Navbar />
      <Suspense
        fallback={
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "80vh",
            }}
          >
          </Box>
        }
      >
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/details/:id' element={<Detail/>} />
        <Route path='/favorites' element={<ProtectedRoute><Favorites/></ProtectedRoute>} />
        <Route path='/login' element={<Loginpage/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/tv' element={<Tv/>} />
        <Route path='/watchlist' element={<ProtectedRoute><Watchlist/></ProtectedRoute>} />
        <Route path='/seemore/:type' element={<Seemore/>} />
      </Routes>
      </Suspense>
    </>
  )
}

export default App