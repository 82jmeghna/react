import baseService from './baseService';

export const getOrdersService = () => {
  return baseService.get('/orders');
};