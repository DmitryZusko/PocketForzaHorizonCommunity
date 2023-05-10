import { ITune } from "@/data-transfer-objects";
import { customAxios } from "@/utilities";

const getLatestTunes = (amount: number) => {
  const axios = customAxios.getAxiosInstance();
  return axios.get<ITune[]>("tune/getlasttunes", { params: { TunesAmount: amount } });
};

const tuneService = {
  getLatestTunes,
};

export default tuneService;
