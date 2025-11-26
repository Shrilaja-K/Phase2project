import React, {  useEffect } from 'react'
import { Box, Container, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  airingTodayfn,
  ontheAirfn,
  Popularfns,
  topRatedfns,
} from '../redux/homeAction';

function Tv() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const airingToday = useSelector(state => state.home.airingtoday);
  const ontheAir = useSelector(state => state.home.ontheair);
  const Populars = useSelector(state => state.home.populars);
  const topRateds = useSelector(state => state.home.toprateds);

  useEffect(() => {
    dispatch(airingTodayfn());
    dispatch(ontheAirfn());
    dispatch(Popularfns());
    dispatch(topRatedfns());
  }, [dispatch]);
  
  return (
    <Container sx={{marginTop:10,width:'100%'}}>
       <Typography variant='h4'>Airing today</Typography>
            <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', pb: 2, '&::-webkit-scrollbar': { display: 'none' } }}>
              {airingToday.map((item) => (
                <Box key={item.id} sx={{ width: 150, flexShrink: 0 }}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    style={{ width: '100%', borderRadius: '10px' }}
                    alt={item.name}
                  />
                  <Typography variant='body2' sx={{ mt: 1, textAlign: 'center' }}>
                    {item.name}
                  </Typography>
      
                </Box>
              ))}
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      
                <Typography
                  sx={{ cursor: "pointer", color: "blue", fontWeight: "bold" }}
                  onClick={() => navigate("/seemore/airingtoday")}
                >
                  See More
                </Typography>
              </Box>
            </Box>
      
            <Typography variant='h4'>On the Air</Typography>
            <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', pb: 2, '&::-webkit-scrollbar': { display: 'none' } }}>
              {ontheAir.map((item) => (
                <Box key={item.id} sx={{ width: 150, flexShrink: 0 }}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    style={{ width: '100%', borderRadius: '10px' }}
                    alt={item.name}
                  />
                  <Typography variant='body2' sx={{ mt: 1, textAlign: 'center' }}>
                    {item.name}
                  </Typography>
      
                </Box>
              ))}
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      
                <Typography
                  sx={{ cursor: "pointer", color: "blue", fontWeight: "bold" }}
                  onClick={() => navigate("/seemore/ontheair")}
                >
                  See More
                </Typography>
              </Box>
            </Box>
      
            <Typography variant='h4'>Popular</Typography>
            <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', pb: 2, '&::-webkit-scrollbar': { display: 'none' } }}>
              {Populars.map((item) => (
                <Box key={item.id} sx={{ width: 150, flexShrink: 0 }}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    style={{ width: '100%', borderRadius: '10px' }}
                    alt={item.name}
                  />
                  <Typography variant='body2' sx={{ mt: 1, textAlign: 'center' }}>
                    {item.name}
                  </Typography>
      
                </Box>
              ))}
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      
                <Typography
                  sx={{ cursor: "pointer", color: "blue", fontWeight: "bold" }}
                  onClick={() => navigate("/seemore/populars")}
                >
                  See More
                </Typography>
              </Box>
            </Box>
      
            <Typography variant='h4'>Rated</Typography>
            <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', pb: 2, '&::-webkit-scrollbar': { display: 'none' } }}>
              {topRateds.map((item) => (
                <Box key={item.id} sx={{ width: 150, flexShrink: 0 }}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    style={{ width: '100%', borderRadius: '10px' }}
                    alt={item.name}
                  />
                  <Typography variant='body2' sx={{ mt: 1, textAlign: 'center' }}>
                    {item.name}
                  </Typography>
      
                </Box>
      
              ))}
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      
                <Typography
                  sx={{ cursor: "pointer", color: "blue", fontWeight: "bold" }}
                  onClick={() => navigate("/seemore/rated")}
                >
                  See More
                </Typography>
              </Box>
            </Box>
      
          </Container>
  )
}

export default Tv
