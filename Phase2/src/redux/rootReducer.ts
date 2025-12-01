import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import authReducer from './authReducer';  
import favReducer from './favReducer';
import watchReducer from './watchReducer';


const rootReducer = combineReducers({
  home: homeReducer,
  auth: authReducer,     
  fav: favReducer,
  watch: watchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;