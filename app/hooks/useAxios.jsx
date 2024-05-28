import { NotifyMessage, NotifyType } from "@/enums";
import { showNotify } from "@/helper";
import axios from "axios";
const useAxios = axios.create();
useAxios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.code === "ERR_NETWORK") {
      showNotify(NotifyMessage.NETWORK_ERROR, NotifyType.ERROR)
    }
    else {
      return Promise.reject(error);
    }

  },
);

export default useAxios;
