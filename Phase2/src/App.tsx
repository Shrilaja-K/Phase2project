import { Suspense, lazy } from 'react'
import Navbar from './Components/Navbar'
import {Routes,Route} from 'react-router-dom'
import ProtectedRoute from './Components/ProtectedRoute'
import { Box, Typography,CircularProgress } from "@mui/material";
import './App.css';


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
            <CircularProgress/>
          </Box>
        }
        >
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/details/:type/:id' element={
         
        <Detail/>} />
        <Route path='/favorites' element={<ProtectedRoute>
        <Favorites/></ProtectedRoute>} />
        <Route path='/login' element={
          <Loginpage/>} />
        <Route path='/signup' element={
          <Signup/>} />
        <Route path='/movies' element={
          <Movies/>} />
        <Route path='/tv' element={
          <Tv/>} />
        <Route path='/watchlist' element={<ProtectedRoute>
          <Watchlist/></ProtectedRoute>} />
        <Route path='/seemore/:type' element={
          <Seemore/>} />
        <Route path='*' element={
          <Box sx={{marginTop:50,display:'flex',justifyContent:'center'}}>
            <Typography >
              No Page Found
            </Typography>
          </Box>
        } />

      </Routes>
      </Suspense>
    </>
  )
}

export default App