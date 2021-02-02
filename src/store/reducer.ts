import { combineReducers, ReducersMapObject } from 'redux';

import userReducer from './User/User.reducer';


const rootReducer: ReducersMapObject<any, any> = {
  user: userReducer,
  
};

export default combineReducers(rootReducer);
