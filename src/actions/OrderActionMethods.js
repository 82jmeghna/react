import { ADD_ORDERS } from '../reducers/OrderReducer';
import { DISABLE_LOADING, ENABLE_LOADING } from '../reducers/LoaderReducer';
import { getOrdersService } from '../services/orderServices';

export const getOrders = () => {
  return dispatch => {
    dispatch({ type: ENABLE_LOADING });
    getOrdersService().then( response => {
      dispatch({ type: DISABLE_LOADING });
      dispatch({ type: ADD_ORDERS, payload: response.data });
    }).catch( error => {
      console.log('error',error);
      dispatch({ type: DISABLE_LOADING });
      alert('Error in fetching data');
    });
  }
};
