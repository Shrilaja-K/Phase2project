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
import Slider from '../Components/Slider';

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
     <Box sx={{ background: "#181C14",paddingTop:15 }}>
    <Slider title="Airing Today" data={airingToday} seeMorePath="/seemore/airingtoday" />
<Slider title="On The Air" data={ontheAir} seeMorePath="/seemore/ontheair" />
<Slider title="Popular TV" data={Populars} seeMorePath="/seemore/populars" />
<Slider title="Top Rated TV" data={topRateds} seeMorePath="/seemore/rated" />
</Box>
  )
}

export default Tv