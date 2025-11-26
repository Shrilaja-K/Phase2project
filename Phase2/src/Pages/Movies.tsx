import React, {  useEffect } from 'react'
import { Box, Container, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  nowPlayingfn,
  Popularfn,
  topRatedfn,
  upComingfn
}from '../redux/homeAction';

function Movies() {

   const navigate = useNavigate();
  const dispatch = useDispatch();

  const nowPlaying = useSelector(state => state.home.nowplaying);
    const popular = useSelector(state => state.home.popular);
    const topRated = useSelector(state => state.home.toprated);
    const upComing = useSelector(state => state.home.upcoming);

    useEffect(() => {
        dispatch(nowPlayingfn());
        dispatch(Popularfn());
        dispatch(topRatedfn());
        dispatch(upComingfn());
    },[dispatch]);


  return (
    <Container sx={{ marginTop: 10 }}>
         <Typography variant='h4'>Now Playing</Typography>
         <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', pb: 2, '&::-webkit-scrollbar': { display: 'none' } }}>
           {nowPlaying.map((item) => (
             <Box key={item.id} sx={{ width: 150, flexShrink: 0 }}>
               <img
                 src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                 style={{ width: '100%', borderRadius: '10px' }}
                 alt={item.title}
               />
               <Typography variant='body2' sx={{ mt: 1, textAlign: 'center' }}>
                 {item.title}
               </Typography>
   
             </Box>
           ))}
           <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
   
             <Typography
               sx={{ cursor: "pointer", color: "blue", fontWeight: "bold" }}
               onClick={() => navigate("/seemore/nowplaying")}
             >
               See More
             </Typography>
           </Box>
         </Box>
   
         <Typography variant='h4'>Popular Movies</Typography>
         <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', pb: 2, '&::-webkit-scrollbar': { display: 'none' } }}>
           {popular.map((item) => (
             <Box key={item.id} sx={{ width: 150, flexShrink: 0 }}>
               <img
                 src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                 style={{ width: '100%', borderRadius: '10px' }}
                 alt={item.title}
               />
               <Typography variant='body2' sx={{ mt: 1, textAlign: 'center' }}>
                 {item.title}
               </Typography>
   
             </Box>
           ))}
           <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
   
             <Typography
               sx={{ cursor: "pointer", color: "blue", fontWeight: "bold" }}
               onClick={() => navigate("/seemore/popular")}
             >
               See More
             </Typography>
           </Box>
         </Box>
   
         <Typography variant='h4'>Top Rated</Typography>
         <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', pb: 2, '&::-webkit-scrollbar': { display: 'none' } }}>
           {topRated.map((item) => (
             <Box key={item.id} sx={{ width: 150, flexShrink: 0 }}>
               <img
                 src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                 style={{ width: '100%', borderRadius: '10px' }}
                 alt={item.title}
               />
               <Typography variant='body2' sx={{ mt: 1, textAlign: 'center' }}>
                 {item.title}
               </Typography>
   
             </Box>
           ))}
           <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
   
             <Typography
               sx={{ cursor: "pointer", color: "blue", fontWeight: "bold" }}
               onClick={() => navigate("/seemore/toprated")}
             >
               See More
             </Typography>
           </Box>
         </Box>
   
         <Typography variant='h4'>Upcoming</Typography>
         <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', pb: 2, '&::-webkit-scrollbar': { display: 'none' } }}>
           {upComing.map((item) => (
             <Box key={item.id} sx={{ width: 150, flexShrink: 0 }}>
               <img
                 src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                 style={{ width: '100%', borderRadius: '10px' }}
                 alt={item.title}
               />
               <Typography variant='body2' sx={{ mt: 1, textAlign: 'center' }}>
                 {item.title}
               </Typography>
   
             </Box>
           ))}
           <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
   
             <Typography
               sx={{ cursor: "pointer", color: "blue", fontWeight: "bold" }}
               onClick={() => navigate("/seemore/upcoming")}
             >
               See More
             </Typography>
           </Box>
         </Box>

    </Container>
  )
}

export default Movies
