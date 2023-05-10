import { IAchivement, IGetNewsRequest, INewsResponse } from "@/data-transfer-objects";
import { customAxios } from "@/utilities";

const getNews = async ({ count, maxLength }: IGetNewsRequest) => {
  const axios = customAxios.getAxiosInstance();
  return axios.get<INewsResponse>("steam/getnews", { params: { count, maxLength } });
};

const getAchievementStatistics = async () => {
  const axios = customAxios.getAxiosInstance();
  return axios.get<IAchivement[]>("steam/getachivementstats");
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
