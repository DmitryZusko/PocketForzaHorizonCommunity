import {
  ICarType,
  IPaginatedRequest,
  IPaginatedResponse,
  IPostCarTypeRequest,
} from "@/data-transfer-objects";
import { customAxios } from "@/utilities";

const getCarTypesAsync = async (request: IPaginatedRequest) => {
  const axios = await customAxios.getAxiosInstance();
  return axios.get<IPaginatedResponse<ICarType>>("cartype", {
    params: { Page: request.page, PageSize: request.pageSize },
  });
};

const postCarTypeAsync = async (request: IPostCarTypeRequest) => {
  const axios = await customAxios.getAxiosInstance();
  return axios.post<ICarType>("cartype", { name: request.carTypeName });
};

const carTypeService = {
  getCarTypesAsync,
  postCarTypeAsync,
};

export default carTypeService;
