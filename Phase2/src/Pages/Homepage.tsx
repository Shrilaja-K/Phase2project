import React, { useEffect } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'; 
import {
  nowPlayingfn,
  Popularfn,
  topRatedfn,
  upComingfn,
  airingTodayfn,
  ontheAirfn,
  Popularfns,
  topRatedfns,
} from '../redux/homeAction'; 

function Homepage() {
 
  const dispatch = useDispatch();

  const nowPlaying = useSelector(state => state.home.nowplaying);
  const popular = useSelector(state => state.home.popular);
  const topRated = useSelector(state => state.home.toprated);
  const upComing = useSelector(state => state.home.upcoming);
  const airingToday = useSelector(state => state.home.airingtoday);
  const ontheAir = useSelector(state => state.home.ontheair); 
  const Populars = useSelector(state => state.home.populars); 
  const topRateds = useSelector(state => state.home.toprateds);


  useEffect(() => {
    dispatch(nowPlayingfn());
    dispatch(Popularfn());
    dispatch(topRatedfn());
    dispatch(upComingfn());
    dispatch(airingTodayfn());
    dispatch(ontheAirfn());
    dispatch(Popularfns());
    dispatch(topRatedfns());
  }, [dispatch]); 

 
console.log(ontheAir);

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
      </Box>

      <Typography variant='h4'>Airing today</Typography>
      <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', pb: 2, '&::-webkit-scrollbar': { display: 'none' } }}>
        {airingToday.map((item) => (
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
      </Box>
      
      <Typography variant='h4'>On the Air</Typography>
      <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', pb: 2, '&::-webkit-scrollbar': { display: 'none' } }}>
        {ontheAir.map((item) => (
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
      </Box>

      <Typography variant='h4'>Populars</Typography>
      <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', pb: 2, '&::-webkit-scrollbar': { display: 'none' } }}>
        {Populars.map((item) => (
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
      </Box>

      <Typography variant='h4'>Rated</Typography>
      <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', pb: 2, '&::-webkit-scrollbar': { display: 'none' } }}>
        {topRateds.map((item) => (
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
      </Box>

    </Container>
  );
}

export default Homepage;
