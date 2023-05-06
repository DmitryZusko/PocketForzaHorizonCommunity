import { IManufacture } from "@/data-transfer-objects/entities/Manufacture";
import { IPaginatedResponse } from "@/data-transfer-objects/responses/PaginatedResponse";
import customAxios from "@/utilities/custom-axios";

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
