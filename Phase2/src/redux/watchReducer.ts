import {ADD_LIST, REMOVE_LIST} from "./watchAction";
export interface Post {
  id: number;
  [key: string]: any;
}

interface liststate {
  addlist: Post[];
  remlist: Post[];

}

const initialState: liststate = {
  addlist: [],
  remlist: [],
};

const watchReducer = (state = initialState, action): liststate => {
  switch (action.type) {
    case ADD_LIST:
      return {
        ...state,
        addlist: state.addlist.some(p => p.id === action.payload.id)
          ? state.addlist.filter(p => p.id !== action.payload.id)
          : [...state.addlist, {...action.payload,listedby:action.userEmail}],
        remlist: state.remlist.filter(p => p.id !== action.payload.id),
      };

    case REMOVE_LIST:
      return {
        ...state,
        remlist: state.remlist.some(p => p.id === action.payload.id)
          ? state.remlist.filter(p => p.id !== action.payload.id)
          : [...state.remlist, {...action.payload,remlistby:action.userEmail}],
        addlist: state.addlist.filter(p => p.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export default watchReducer;