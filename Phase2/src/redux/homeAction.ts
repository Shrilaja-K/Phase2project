import {
NOW_PLAYING,
 POPULAR,
 TOP_RATED,
 UP_COMING,
 AIRING_TODAY,
 ONTHE_AIR,
 POPULARS,
 TOP_RATEDS,
} from './homeType';
import axios from 'axios'

export const fetchnowplaying = (nowplaying) => ({
  type:NOW_PLAYING,  
  payload:nowplaying
})
export const fetchpopular = (popular) => ({
  type:POPULAR,
  payload:popular
})
export const fetchtoprated = (toprated) => ({
  type:TOP_RATED,
  payload:toprated
})
export const fetchupcoming = (upcoming) => ({
  type:UP_COMING,
  payload:upcoming
})
export const fetchairingtoday = (airingtoday) => ({
  type:AIRING_TODAY,
  payload:airingtoday
})
export const fetchontheair = (ontheair) => ({
  type:ONTHE_AIR,
  payload:ontheair
})
export const fetchpopulars = (populars) => ({
  type:POPULARS,
  payload:populars
})
export const fetchtoprateds = (toprateds) => ({
  type:TOP_RATEDS,
  payload:toprateds
})

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNTMyOTcwNGQyNjI3YmQ1MjNhZWViMDhkMGQyYWRhMCIsIm5iZiI6MTc2NDEzNDA2OS44MTIsInN1YiI6IjY5MjY4Y2I1NzlhNDhiNDBmNzI0ODliMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._2g0ivU4x2iO-A6C2Cgt28y_M0xuDmSyYFInZE4JyFE'
  }
};

export const nowPlayingfn = () => async (dispatch)=>{
    try {
      const res = await axios.get('https://api.themoviedb.org/3/movie/now_playing', options)
      console.log(res.data);
      dispatch(fetchnowplaying(res.data.results));
    } catch (err) {
      console.error(err);
    }
  }

 export const Popularfn =  () => async (dispatch)=> {
    try {
      const res = await axios.get('https://api.themoviedb.org/3/movie/popular', options)
      console.log(res.data);
      dispatch(fetchpopular(res.data.results));
    } catch (err) {
      console.error(err);
    }
  }


 export const topRatedfn = () => async (dispatch) =>{
    try {
      const res = await axios.get('https://api.themoviedb.org/3/movie/top_rated', options)
      console.log(res.data);
      dispatch(fetchtoprated(res.data.results));
    } catch (err) {
      console.error(err);
    }
  }

 export const upComingfn =  () => async (dispatch)=>{
    try {
      const res = await axios.get('https://api.themoviedb.org/3/movie/upcoming', options)
      console.log(res.data);
      dispatch(fetchupcoming(res.data.results));
    } catch (err) {
      console.error(err);
    }
  }

 export const airingTodayfn =  () => async (dispatch)=>{
    try {
      const res = await axios.get('https://api.themoviedb.org/3/tv/airing_today', options)
      console.log(res.data);
      dispatch(fetchairingtoday(res.data.results));
    } catch (err) {
      console.error(err);
    }
  }

 export const ontheAirfn =  () => async (dispatch)=>{
    try {
      const res = await axios.get('https://api.themoviedb.org/3/tv/on_the_air', options)
      console.log(res.data);
      dispatch(fetchontheair(res.data.results));
    } catch (err) {
      console.error(err);
    }
  }

 export const Popularfns = () =>  async (dispatch)=>{
    try {
      const res = await axios.get('https://api.themoviedb.org/3/tv/popular', options)
      console.log(res.data);
      dispatch(fetchpopulars(res.data.results));
    } catch (err) {
      console.error(err);
    }
  }

 export const topRatedfns =  () => async (dispatch)=>{
    try {
      const res = await axios.get('https://api.themoviedb.org/3/tv/top_rated', options)
      console.log(res.data);
      dispatch(fetchtoprateds(res.data.results));
    } catch (err) {
      console.error(err);
    }
  }