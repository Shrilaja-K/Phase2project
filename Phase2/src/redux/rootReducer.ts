import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import authReducer from './authReducer';  
import favReducer from './favReducer';

const rootReducer = combineReducers({
  home: homeReducer,
  auth: authReducer,     
  fav: favReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;