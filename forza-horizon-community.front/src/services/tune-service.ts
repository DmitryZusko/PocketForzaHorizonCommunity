import { ITune } from "@/data-transfer-objects/entities/Tune";
import customAxios from "@/utilities/custom-axios";

const getLatestTunes = (amount: number) => {
  const axios = customAxios.getAxiosInstance();
  return axios.get<ITune[]>("tune/getlasttunes", { params: { TunesAmount: amount } });
};

const tuneService = {
  getLatestTunes,
};

export default tuneService;
