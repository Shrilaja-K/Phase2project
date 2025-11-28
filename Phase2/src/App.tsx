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
      
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/details/:id' element={
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
      ><Detail/></Suspense>} />
        <Route path='/favorites' element={<ProtectedRoute>
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
          ><Favorites/></Suspense></ProtectedRoute>} />
        <Route path='/login' element={
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
          ><Loginpage/></Suspense>} />
        <Route path='/signup' element={
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
          ><Signup/></Suspense>} />
        <Route path='/movies' element={
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
          ><Movies/></Suspense>} />
        <Route path='/tv' element={
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
          ><Tv/></Suspense>} />
        <Route path='/watchlist' element={<ProtectedRoute>
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
          ><Watchlist/></Suspense></ProtectedRoute>} />
        <Route path='/seemore/:type' element={
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
          ><Seemore/></Suspense>} />
        <Route path='*' element={
          <Box sx={{marginTop:50,display:'flex',justifyContent:'center'}}>
            <Typography >
              No Match Found
            </Typography>
          </Box>
        } />

      </Routes>
    </>
  )
}

export default App