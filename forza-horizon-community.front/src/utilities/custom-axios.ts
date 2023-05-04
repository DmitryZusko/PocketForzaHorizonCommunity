import axios from "axios";
import envHandler from "./env-handler";

const getAxiosInstance = () => {
  return axios.create({
    baseURL: envHandler.GetServerApiUrl(),
  });
};

const customAxios = { getAxiosInstance };

export default customAxios;
