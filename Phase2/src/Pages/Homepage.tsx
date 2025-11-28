import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
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
import Card from '../Components/Card';
import SkeletonCard from '../Components/SkeletonCard';
import Footer from '../Components/Footer';


function Section({ title, data, seeMorePath }) {
  const navigate = useNavigate();

  return (
    <Box sx={{p:2}}> 
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: "#ECDFCC",
            mt: 2
          }}
        >
          {title.toUpperCase()}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: "#ECDFCC",
            mt: 2,
            cursor: "pointer",
            marginRight:2
          }}
          onClick={() => navigate(seeMorePath)}
        >
          See More
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(5, 1fr)",
            lg: "repeat(6, 1fr)",
          },
        }}
      >
        {data && data.length > 0
  ? data.slice(0, 6).map(item => <Card key={item.id} item={item} />)
  : Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
}

      </Box>

    </Box> 
  );
}

function Homepage() {
  const dispatch = useDispatch();
  const home = useSelector(state => state.home);

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
    <Box >
    <Box sx={{ background: "#181C14", pt: 10 }}>

      <Section title="Now Playing" data={home.nowplaying} seeMorePath="/seemore/nowplaying" />
      <Section title="Popular Movies" data={home.popular} seeMorePath="/seemore/popular" />
      <Section title="Top Rated" data={home.toprated} seeMorePath="/seemore/toprated" />
      <Section title="Upcoming" data={home.upcoming} seeMorePath="/seemore/upcoming" />
      <Section title="Airing Today" data={home.airingtoday} seeMorePath="/seemore/airingtoday" />
      <Section title="On The Air" data={home.ontheair} seeMorePath="/seemore/ontheair" />
      <Section title="Popular TV" data={home.populars} seeMorePath="/seemore/populars" />
      <Section title="Top Rated TV" data={home.toprateds} seeMorePath="/seemore/toprateds" />
    </Box>
    <Footer />
    </Box>
  );
}

export default Homepage;