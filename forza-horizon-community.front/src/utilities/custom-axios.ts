import axios from "axios";
import envHandler from "./env-handler";

const getAxiosInstance = () => {
  return axios.create({
    baseURL: envHandler.GetServerApiUrl(),
  });
};

const getCancelationToken = () => {
  return axios.CancelToken.source();
};

const customAxios = { getAxiosInstance, getCancelationToken };

export default customAxios;
