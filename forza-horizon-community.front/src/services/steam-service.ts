import {
  IAchivement,
  IGetAchievementsRequest,
  IGetNewsRequest,
  INewsResponse,
} from "@/data-transfer-objects";
import { customAxios } from "@/utilities";

const getNewsAsync = async (request: IGetNewsRequest) => {
  const axios = await customAxios.getAxiosInstance();
  return axios.get<INewsResponse>("steam/getnews", {
    params: { Count: request.count, MaxLength: request.maxLength },
  });
};

const getAchievementStatisticsAsync = async (request: IGetAchievementsRequest) => {
  const axios = await customAxios.getAxiosInstance();
  return axios.get<IAchivement[]>("steam/getachivementstats", {
    params: { Amount: request.amount },
  });
};

const getCurrentOnlineNumberAsync = async () => {
  const axios = await customAxios.getAxiosInstance();
  return axios.get<number>("steam/getcurrentonlinecount");
};

const steamService = {
  getNewsAsync,
  getAchievementStatisticsAsync,
  getCurrentOnlineNumberAsync,
};

export default steamService;
