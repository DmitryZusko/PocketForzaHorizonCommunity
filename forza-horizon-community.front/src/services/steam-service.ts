import { IGetNewsRequest } from "@/data-transfer-objects/requests/GetNewsRequest";
import { INewsResponse } from "@/data-transfer-objects/responses/NewsResponse";
import customAxios from "@/utilities/custom-axios";

const GetNews = async ({ count, maxLength }: IGetNewsRequest) => {
  const axios = customAxios.getAxiosInstance();
  return axios.get<INewsResponse>("steam", { params: { count, maxLength } });
};

const steamService = {
  GetNews,
};

export default steamService;
