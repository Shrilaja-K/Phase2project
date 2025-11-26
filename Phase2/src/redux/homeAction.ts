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

export const fetchnowplaying = (data,page) => ({
  type:NOW_PLAYING,  
  payload:{data,page}
})
export const fetchpopular = (data,page) => ({
  type:POPULAR,
  payload:{data,page}
})
export const fetchtoprated = (data,page) => ({
  type:TOP_RATED,
  payload:{data,page}
})
export const fetchupcoming = (data,page) => ({
  type:UP_COMING,
  payload:{data,page}
})
export const fetchairingtoday = (data,page) => ({
  type:AIRING_TODAY,
  payload:{data,page}
})
export const fetchontheair = (data,page) => ({
  type:ONTHE_AIR,
  payload:{data,page}
})
export const fetchpopulars = (data,page) => ({
  type:POPULARS,
  payload:{data,page}
})
export const fetchtoprateds = (data,page) => ({
  type:TOP_RATEDS,
  payload:{data,page}
})

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNTMyOTcwNGQyNjI3YmQ1MjNhZWViMDhkMGQyYWRhMCIsIm5iZiI6MTc2NDEzNDA2OS44MTIsInN1YiI6IjY5MjY4Y2I1NzlhNDhiNDBmNzI0ODliMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._2g0ivU4x2iO-A6C2Cgt28y_M0xuDmSyYFInZE4JyFE'
  }
};

export const nowPlayingfn = (page=1) => async (dispatch)=>{
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?page=${page}`, options)
      console.log(res.data);
      dispatch(fetchnowplaying(res.data.results,page));
    } catch (err) {
      console.error(err);
    }
  }

 export const Popularfn =  (page=1) => async (dispatch)=> {
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?page=${page}`, options)
      console.log(res.data);
      dispatch(fetchpopular(res.data.results,page));
    } catch (err) {
      console.error(err);
    }
  }


 export const topRatedfn = (page=1) => async (dispatch) =>{
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?page=${page}`, options)
      console.log(res.data);
      dispatch(fetchtoprated(res.data.results,page));
    } catch (err) {
      console.error(err);
    }
  }

 export const upComingfn =  (page=1) => async (dispatch)=>{
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?page=${page}`, options)
      console.log(res.data);
      dispatch(fetchupcoming(res.data.results,page));
    } catch (err) {
      console.error(err);
    }
  }

 export const airingTodayfn =  (page=1) => async (dispatch)=>{
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/tv/airing_today?page=${page}`, options)
      console.log(res.data);
      dispatch(fetchairingtoday(res.data.results,page));
    } catch (err) {
      console.error(err);
    }
  }

 export const ontheAirfn =  (page=1) => async (dispatch)=>{
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/tv/on_the_air?page=${page}`, options)
      console.log(res.data);
      dispatch(fetchontheair(res.data.results,page));
    } catch (err) {
      console.error(err);
    }
  }

 export const Popularfns = (page=1) =>  async (dispatch)=>{
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/tv/popular?page=${page}`, options)
      console.log(res.data);
      dispatch(fetchpopulars(res.data.results,page));
    } catch (err) {
      console.error(err);
    }
  }

 export const topRatedfns =  (page=1) => async (dispatch)=>{
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?page=${page}`, options)
      console.log(res.data);
      dispatch(fetchtoprateds(res.data.results,page));
    } catch (err) {
      console.error(err);
    }
  }