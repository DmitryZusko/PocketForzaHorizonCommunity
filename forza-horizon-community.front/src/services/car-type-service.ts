import { ICarType, IPaginatedRequest, IPaginatedResponse } from "@/data-transfer-objects";
import { customAxios } from "@/utilities";

const getCarTypes = ({ page, pageSize }: IPaginatedRequest) => {
  const axios = customAxios.getAxiosInstance();
  return axios.get<IPaginatedResponse<ICarType>>("cartype", { params: { page, pageSize } });
};

const carTypeService = {
  getCarTypes,
};

export default carTypeService;
