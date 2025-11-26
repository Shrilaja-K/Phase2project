import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Box, Container, Typography } from '@mui/material';

function Movies() {
  const apikey = import.meta.env.VITE_CINE_API_KEY

  const [nowPlaying, setnowPlaying] = useState([]);
  const [Popular, setPopular] = useState([]);
  const [topRated, settopRated] = useState([]);
  const [upComing, setupComing] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNTMyOTcwNGQyNjI3YmQ1MjNhZWViMDhkMGQyYWRhMCIsIm5iZiI6MTc2NDEzNDA2OS44MTIsInN1YiI6IjY5MjY4Y2I1NzlhNDhiNDBmNzI0ODliMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._2g0ivU4x2iO-A6C2Cgt28y_M0xuDmSyYFInZE4JyFE'
    }
  };

  const nowPlayingfn = async () => {
    try {
      const res = await axios.get('https://api.themoviedb.org/3/movie/now_playing', options)
      console.log(res.data);
      setnowPlaying(res.data.results);
    } catch (err) {
      console.error(err);
    }
  }

  const Popularfn = async () => {
    try {
      const res = await axios.get('https://api.themoviedb.org/3/movie/popular', options)
      console.log(res.data);
      setPopular(res.data.results);
    } catch (err) {
      console.error(err);
    }
  }


  const topRatedfn = async () => {
    try {
      const res = await axios.get('https://api.themoviedb.org/3/movie/top_rated', options)
      console.log(res.data);
      settopRated(res.data.results);
    } catch (err) {
      console.error(err);
    }
  }

  const upComingfn = async () => {
    try {
      const res = await axios.get('https://api.themoviedb.org/3/movie/upcoming', options)
      console.log(res.data);
      setupComing(res.data.results);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    nowPlayingfn();
    Popularfn();
    topRatedfn();
    upComingfn();
  }, []);
  return (
    <Container sx={{marginTop:10}}>

      <Typography variant='h4'>Now Playing</Typography>
      <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', pb: 2,'&::-webkit-scrollbar': { display: 'none' } }}>

        {nowPlaying.map((item) => (
          <Box key={item.id} sx={{ width: 150,flexShrink:0 }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              style={{ width: '100%', borderRadius: '10px' }}
            />
            <Typography variant='body2' sx={{ mt: 1, textAlign: 'center' }}>
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>

      <Typography variant='h4'>Popular</Typography>
      <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', pb: 2 ,'&::-webkit-scrollbar': { display: 'none' }}}>

        {Popular.map((item) => (
          <Box key={item.id} sx={{ width: 150,flexShrink:0 }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              style={{ width: '100%', borderRadius: '10px' }}
            />
            <Typography variant='body2' sx={{ mt: 1, textAlign: 'center' }}>
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>

      <Typography variant='h4'>Top Rated</Typography>
      <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', pb: 2,'&::-webkit-scrollbar': { display: 'none' } }}>

        {topRated.map((item) => (
          <Box key={item.id} sx={{ width: 150,flexShrink:0 }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              style={{ width: '100%', borderRadius: '10px' }}
            />
            <Typography variant='body2' sx={{ mt: 1, textAlign: 'center' }}>
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>

      <Typography variant='h4'>Upcoming</Typography>
      <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', pb: 2 ,'&::-webkit-scrollbar': { display: 'none' }}}>

        {upComing.map((item) => (
          <Box key={item.id} sx={{ width: 150,flexShrink:0}}>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              style={{ width: '100%', borderRadius: '10px' }}
            />
            <Typography variant='body2' sx={{ mt: 1, textAlign: 'center' }}>
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>

    </Container>
  )
}

export default Movies
