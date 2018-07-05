export const ADD_ORDERS = 'ADD_ORDERS';

const initialState = {
  orders : []
};

export default (state = initialState, action) => {
  switch (action.type){
    case ADD_ORDERS:
      return {
        ...state,
        orders: action.payload
      };
    default:
      return state;
  }
}