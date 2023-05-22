import { AccessTokenKey } from "@/components";
import BadRequestError from "@/errors/BadRequestError";
import UnauthorizedError from "@/errors/UnauthorizedError";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import envHandler from "./env-handler";

const getAxiosInstance = async () => {
  const appAxios = axios.create({
    baseURL: envHandler.GetServerApiUrl(),
    headers: {
      Authorization: `Bearer ${await AsyncStorage.getItem(AccessTokenKey)}`,
    },
  });

  appAxios.interceptors.response.use(null, function (error) {
    if (error.response.status === 401) {
      throw new UnauthorizedError();
    }

    if (error.response.status === 400) {
      throw new BadRequestError(error.response.message);
    }
  });
  return appAxios;
};

const getCancelationToken = () => {
  return axios.CancelToken.source();
};

const customAxios = { getAxiosInstance, getCancelationToken };

export default customAxios;
