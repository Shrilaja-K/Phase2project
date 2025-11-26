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
import React from 'react'

const initialState = {
    nowplaying:[],
    popular:[],
    toprated:[],
    upcoming:[],
    airingtoday:[],
    ontheair:[],
    populars:[],
    toprateds:[]
}

    const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case NOW_PLAYING:
      if(action.payload.page === 1){
      return {
        ...state,
        nowplaying: action.payload.data,
      };
    } else {
      return {
        ...state,
        nowplaying: [...state.nowplaying,
           ...action.payload.data],
      };
    }
    case POPULAR:
     if(action.payload.page === 1){
      return {
        ...state,
        popular: action.payload.data,
      };
    } else {
      return {
        ...state,
        popular: [...state.nowplaying,
           ...action.payload.data],
      };
    }
      case TOP_RATED:
      if(action.payload.page === 1){
      return {
        ...state,
        toprated: action.payload.data,
      };
    } else {
      return {
        ...state,
        toprated: [...state.nowplaying,
           ...action.payload.data],
      };
    }
      case UP_COMING:
      if(action.payload.page === 1){
      return {
        ...state,
        upcoming: action.payload.data,
      };
    } else {
      return {
        ...state,
        upcoming: [...state.nowplaying,
           ...action.payload.data],
      };
    }
      case AIRING_TODAY:
      if(action.payload.page === 1){
      return {
        ...state,
        airingtoday: action.payload.data,
      };
    } else {
      return {
        ...state,
        airingtoday: [...state.nowplaying,
           ...action.payload.data],
      };
    }
      case ONTHE_AIR:
     if(action.payload.page === 1){
      return {
        ...state,
        ontheair: action.payload.data,
      };
    } else {
      return {
        ...state,
        ontheair: [...state.nowplaying,
           ...action.payload.data],
      };
    }
      case POPULARS:
      if(action.payload.page === 1){
      return {
        ...state,
        populars: action.payload.data,
      };
    } else {
      return {
        ...state,
        populars: [...state.nowplaying,
           ...action.payload.data],
      };
    }
      case TOP_RATEDS:
      if(action.payload.page === 1){
      return {
        ...state,
        toprateds: action.payload.data,
      };
    } else {
      return {
        ...state,
        toprateds: [...state.nowplaying,
           ...action.payload.data],
      };
    }
    
    default:
      return state;
  }
};

export default homeReducer
