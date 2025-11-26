import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Box,Typography,Container } from '@mui/material';

function Tv() {
  const apikey = import.meta.env.VITE_CINE_API_KEY

  const [airingToday, setairingToday] = useState([]);
  const [ontheAir, setontheAir] = useState([]);
  const [Popular, setPopular] = useState([]);
  const [topRated, settopRated] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNTMyOTcwNGQyNjI3YmQ1MjNhZWViMDhkMGQyYWRhMCIsIm5iZiI6MTc2NDEzNDA2OS44MTIsInN1YiI6IjY5MjY4Y2I1NzlhNDhiNDBmNzI0ODliMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._2g0ivU4x2iO-A6C2Cgt28y_M0xuDmSyYFInZE4JyFE'
    }
  };

  const airingTodayfn = async() => {
  try{
  const res = await axios.get('https://api.themoviedb.org/3/tv/airing_today',options) 
   console.log(res.data);
  setairingToday (res.data.results);
  } catch (err){
   console.error(err);
  }
}

const ontheAirfn = async() => {
  try{
  const res = await axios.get('https://api.themoviedb.org/3/tv/on_the_air',options) 
   console.log(res.data);
  setontheAir (res.data.results);
  } catch (err){
   console.error(err);
  }
}

const Popularfn = async() => {
  try{
  const res = await axios.get('https://api.themoviedb.org/3/tv/popular',options) 
   console.log(res.data);
  setPopular (res.data.results);
  } catch (err){
   console.error(err);
  }
}

const topRatedfn = async() => {
  try{
  const res = await axios.get('https://api.themoviedb.org/3/tv/top_rated',options) 
   console.log(res.data);
  settopRated (res.data.results);
  } catch (err){
   console.error(err);
  }
}

useEffect( () => {
  airingTodayfn();
  ontheAirfn();
  Popularfn();
  topRatedfn();
},[])

  return (
    <Container sx={{marginTop:10,width:'100%'}}>
      <Typography variant='h4' >Airing Today</Typography>
      <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', flexWrap:'nowrap',pb: 2 ,'&::-webkit-scrollbar': { display: 'none' } }}>

        {airingToday.map((item) => (
          <Box key={item.id} sx={{ width: 150,flexShrink: 0  }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              style={{ width: '100%', borderRadius: '10px' }}
            />
            <Typography variant='body2' sx={{ mt: 1, textAlign: 'center' }}>
              {item.name}
            </Typography>
          </Box>
        ))}
      </Box>

      <Typography variant='h4'>On the Air</Typography>
      <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', pb: 2,'&::-webkit-scrollbar': { display: 'none' }  }}>

        {ontheAir.map((item) => (
          <Box key={item.id} sx={{ width: 150 ,flexShrink: 0 }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              style={{ width: '100%', borderRadius: '10px' }}
            />
            <Typography variant='body2' sx={{ mt: 1, textAlign: 'center' }}>
              {item.name}
            </Typography>
          </Box>
        ))}
      </Box>

      <Typography variant='h4'>Popular</Typography>
      <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', pb: 2 ,'&::-webkit-scrollbar': { display: 'none' } }}>

        {Popular.map((item) => (
          <Box key={item.id} sx={{ width: 150,flexShrink: 0  }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              style={{ width: '100%', borderRadius: '10px' }}
            />
            <Typography variant='body2' sx={{ mt: 1, textAlign: 'center' }}>
              {item.name}
            </Typography>
          </Box>
        ))}
      </Box>

      <Typography variant='h4'>Top Rated</Typography>
      <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', pb: 2, '&::-webkit-scrollbar': { display: 'none' } }}>

        {topRated.map((item) => (
          <Box key={item.id} sx={{ width: 150 ,flexShrink: 0 }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              style={{ width: '100%', borderRadius: '10px' }}
            />
            <Typography variant='body2' sx={{ mt: 1, textAlign: 'center' }}>
              {item.name}
            </Typography>
          </Box>
        ))}
      </Box>

    </Container>
  )
}

export default Tv
