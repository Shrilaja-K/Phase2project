import {ADD_FAV, REMOVE_FAV} from "./favAction";

export interface Post {
  id: number;
  key: string ;
}

interface favstate {
  favmovie: Post[];
  remfavmovie: Post[];
}

const initialState: favstate = {
  favmovie: [],
  remfavmovie: [],
};

const favReducer = (state = initialState, action): favstate => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        favmovie: state.favmovie.some(p => p.id === action.payload.id)
          ? state.favmovie.filter(p => p.id !== action.payload.id)
          : [...state.favmovie, {...action.payload,favby:action.userEmail}],
        remfavmovie: state.remfavmovie.filter(p => p.id !== action.payload.id),
      };

    case REMOVE_FAV:
      return {
        ...state,
        remfavmovie: state.remfavmovie.some(p => p.id === action.payload.id)
          ? state.remfavmovie.filter(p => p.id !== action.payload.id)
          : [...state.remfavmovie, {...action.payload,remfavby:action.userEmail}],
        favmovie: state.favmovie.filter(p => p.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export default favReducer;