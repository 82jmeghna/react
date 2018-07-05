export const ENABLE_LOADING = 'ENABLE_LOADING';
export const DISABLE_LOADING = 'DISABLE_LOADING';

export default (state = false,action) => {
  switch (action.type){
    case ENABLE_LOADING:
      return true;
    case DISABLE_LOADING:
      return false;
    default:
      return state;
  }
}