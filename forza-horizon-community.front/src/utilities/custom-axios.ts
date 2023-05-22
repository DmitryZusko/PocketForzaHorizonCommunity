import { AccessTokenKey } from "@/components";
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
  return appAxios;
};

const getCancelationToken = () => {
  return axios.CancelToken.source();
};

const customAxios = { getAxiosInstance, getCancelationToken };

export default customAxios;
