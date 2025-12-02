import  {  useEffect } from 'react'
import { Box,Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import {
  airingTodayfn,
  ontheAirfn,
  Popularfns,
  topRatedfns,
} from '../redux/homeAction';
import Slider from '../Components/Slider';
import type { RootState } from '../redux/rootReducer';
import { useNavigate } from 'react-router-dom';

function Tv() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const airingToday = useSelector((state:RootState) => state.home.airingtoday);
  const ontheAir = useSelector((state:RootState) => state.home.ontheair);
  const Populars = useSelector((state:RootState) => state.home.populars);
  const topRateds = useSelector((state:RootState) => state.home.toprateds);

  useEffect(() => {
    dispatch(airingTodayfn());
    dispatch(ontheAirfn());
    dispatch(Popularfns());
    dispatch(topRatedfns());
  }, [dispatch]);
  
  return (
     <Box sx={{ background: "#181C14",paddingTop:10 }}>
       <Button variant="text" sx={{color:"whitesmoke"}} onClick={() => Navigate(-1)}>
        Back
      </Button>
    <Slider title="Airing Today" data={airingToday} seeMorePath="/seemore/airingtoday" />
<Slider title="On The Air" data={ontheAir} seeMorePath="/seemore/ontheair" />
<Slider title="Popular TV" data={Populars} seeMorePath="/seemore/populars" />
<Slider title="Top Rated TV" data={topRateds} seeMorePath="/seemore/rated" />
</Box>
  )
}

export default Tv