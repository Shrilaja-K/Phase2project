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
      return {
        ...state,
        nowplaying: action.payload,
      };
    case POPULAR:
      return {
        ...state,
        popular: action.payload,
      };
      case TOP_RATED:
      return {
        ...state,
        toprated: action.payload,
      };
      case UP_COMING:
      return {
        ...state,
        upcoming: action.payload,
      };
      case AIRING_TODAY:
      return {
        ...state,
        airingtoday: action.payload,
      };
      case ONTHE_AIR:
      return {
        ...state,
        ontheair: action.payload,
      };
      case POPULARS:
      return {
        ...state,
        populars: action.payload,
      };
      case TOP_RATEDS:
      return {
        ...state,
        toprateds: action.payload,
      };
    
    default:
      return state;
  }
};

export default homeReducer
