import {
  ICarType,
  IPaginatedRequest,
  IPaginatedResponse,
  IPostCarTypeRequest,
} from "@/data-transfer-objects";
import { customAxios } from "@/utilities";

const getCarTypes = ({ page, pageSize }: IPaginatedRequest) => {
  const axios = customAxios.getAxiosInstance();
  return axios.get<IPaginatedResponse<ICarType>>("cartype", { params: { page, pageSize } });
};

const postCarType = ({ carTypeName }: IPostCarTypeRequest) => {
  const axios = customAxios.getAxiosInstance();
  return axios.post<ICarType>("cartype", { name: carTypeName });
};

const carTypeService = {
  getCarTypes,
  postCarType,
};

export default carTypeService;
