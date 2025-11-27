import React, { useEffect } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
import Slider from '../Components/Slider';



function Homepage() {
  const navigate = useNavigate();
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


  return (
    <>
    <Slider title="Now Playing" data={nowPlaying} seeMorePath="/seemore/nowplaying" />
<Slider title="Popular Movies" data={popular} seeMorePath="/seemore/popular" />
<Slider title="Top Rated" data={topRated} seeMorePath="/seemore/toprated" />
<Slider title="Upcoming" data={upComing} seeMorePath="/seemore/upcoming" />

<Slider title="Airing Today" data={airingToday} seeMorePath="/seemore/airingtoday" />
<Slider title="On The Air" data={ontheAir} seeMorePath="/seemore/ontheair" />
<Slider title="Popular TV" data={Populars} seeMorePath="/seemore/populars" />
<Slider title="Top Rated TV" data={topRateds} seeMorePath="/seemore/rated" />
</>
  )
}
export default Homepage;
