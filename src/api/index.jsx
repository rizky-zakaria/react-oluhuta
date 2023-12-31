import axios from "axios";

import Cookies from "js-cookie";

const Api = axios.create({
  baseURL: import.meta.env.VITE_APP_BASEURL,

  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

Api.interceptors.response.use(
  function (response) {
    return response;
  },
  (error) => {
    if (401 === error.response.status) {
      Cookies.remove("token");

      window.location = "/user/login";
    } else {
      return Promise.reject(error);
    }
  }
);

export default Api;
