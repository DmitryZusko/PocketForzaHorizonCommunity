import { ICarType } from "@/data-transfer-objects/entities/CarType";
import { IPaginatedRequest } from "@/data-transfer-objects/requests/PaginatedRequest";
import { IPaginatedResponse } from "@/data-transfer-objects/responses/PaginatedResponse";
import customAxios from "@/utilities/custom-axios";

const getCarTypes = ({ page, pageSize }: IPaginatedRequest) => {
  const axios = customAxios.getAxiosInstance();
  return axios.get<IPaginatedResponse<ICarType>>("cartype", { params: { page, pageSize } });
};

const carTypeService = {
  getCarTypes,
};

export default carTypeService;
