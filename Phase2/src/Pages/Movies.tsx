import React, {  useEffect } from 'react'
import { Box, Button} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  nowPlayingfn,
  Popularfn,
  topRatedfn,
  upComingfn
}from '../redux/homeAction';
import Slider from '../Components/Slider';

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
     <Box sx={{ background: "#181C14",paddingTop:15 }}>
      <Button variant="text" sx={{color:"whitesmoke"}} onClick={() => navigate(-1)}>
        Back
      </Button>
    <Slider title="Now Playing" data={nowPlaying} seeMorePath="/seemore/nowplaying" />
<Slider title="Popular Movies" data={popular} seeMorePath="/seemore/popular" />
<Slider title="Top Rated" data={topRated} seeMorePath="/seemore/toprated" />
<Slider title="Upcoming" data={upComing} seeMorePath="/seemore/upcoming" />
</Box>
  )
}

export default Movies