import axios from 'axios';

export const baseURL = 'http://6170a748.ngrok.io';

const baseService = axios.create({ baseURL });

export default baseService;