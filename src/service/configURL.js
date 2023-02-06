import axios from "axios";
import { userLocalService } from "./localService";
import { store_toolkit } from "./../index";
import { setLoadingOff, setLoadingOn } from "../redux_toolkit/spinnerSlice";

export const https = axios.create({
  baseURL: "https://elearningnew.cybersoft.edu.vn",
  headers: {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzNSIsIkhldEhhblN0cmluZyI6IjAzLzA2LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4NTc1MDQwMDAwMCIsIm5iZiI6MTY1NzczMTYwMCwiZXhwIjoxNjg1ODk4MDAwfQ.KXn1XtehbphvfW3OSUFlLIzSrEtSLDtDQG4BgF38Cus",
    Authorization: "Bearer " + userLocalService.get()?.accessToken,
  },
});

//loading
// Add a request interceptor
https.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    store_toolkit.dispatch(setLoadingOn());
    console.log("start");
    return config;
  },
  function (error) {
    // store_toolkit.dispatch(setLoadingOn());

    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
https.interceptors.response.use(
  function (response) {
    store_toolkit.dispatch(setLoadingOff());
    console.log("off");

    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // store_toolkit.dispatch(setLoadingOn());

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
