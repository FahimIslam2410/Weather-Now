// config.js
const isDevelopment = process.env.NODE_ENV === 'development';

const API_BASE_URL = isDevelopment ? '' : 'https://weathernowapi-fahimislam2410.vercel.app';

export { API_BASE_URL };