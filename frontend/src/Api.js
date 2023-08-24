import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api/',
  timeout: 5000,
});

// Handle request errors
axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Handle response errors
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle timeouts
    if (error.code === 'ECONNABORTED') {
      alert('Request took too long! Please try again.');
    }

    // Handle other errors
    if (error.response.status === 401) {
      // Handle unauthorized error, maybe redirect to login?
    } else if (error.response.status === 404) {
      // Handle not found error
    } // ... handle other status codes

    return Promise.reject(error);
  },
);

export default axiosInstance;
