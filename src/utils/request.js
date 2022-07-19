import axios from "axios";

const service = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 5000,
});

service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const request = (options) => {
  return service(options);
};

export default request;
