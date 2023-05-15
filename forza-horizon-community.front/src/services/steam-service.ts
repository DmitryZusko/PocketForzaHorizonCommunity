import {
  IAchivement,
  IGetAchievementsRequest,
  IGetNewsRequest,
  INewsResponse,
} from "@/data-transfer-objects";
import { customAxios } from "@/utilities";

const getNews = async ({ count, maxLength }: IGetNewsRequest) => {
  const axios = customAxios.getAxiosInstance();
  return axios.get<INewsResponse>("steam/getnews", { params: { count, maxLength } });
};

const getAchievementStatistics = async (request: IGetAchievementsRequest) => {
  const axios = customAxios.getAxiosInstance();
  return axios.get<IAchivement[]>("steam/getachivementstats", {
    params: { Amount: request.amount },
  });
};

const getCurrentOnlineNumber = async () => {
  const axios = customAxios.getAxiosInstance();
  return axios.get<number>("steam/getcurrentonlinecount");
};

const steamService = {
  getNews,
  getAchievementStatistics,
  getCurrentOnlineNumber,
};

export default steamService;
