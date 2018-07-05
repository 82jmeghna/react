import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import OrderReducer from './OrderReducer';
import isLoading from './LoaderReducer';

export default combineReducers({
  Routes: routerReducer,
  OrderReducer,
  isLoading
});