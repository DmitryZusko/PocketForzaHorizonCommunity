import { IManufacture, IPaginatedResponse } from "@/data-transfer-objects";
import { customAxios } from "@/utilities";

const getManufactures = (page?: number, pageCount?: number) => {
  const axios = customAxios.getAxiosInstance();
  return axios.get<IPaginatedResponse<IManufacture>>("manufacture", {
    params: { page, pageCount },
  });
};

const manufactureService = {
  getManufactures,
};

export default manufactureService;
