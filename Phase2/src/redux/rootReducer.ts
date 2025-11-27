import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import authReducer from './authReducer';  

const rootReducer = combineReducers({
  home: homeReducer,
  auth: authReducer,     
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;