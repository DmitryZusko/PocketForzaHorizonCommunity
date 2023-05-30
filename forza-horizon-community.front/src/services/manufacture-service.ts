import {
  IManufacture,
  IPaginatedRequest,
  IPaginatedResponse,
  IPostManufactureRequest,
} from "@/data-transfer-objects";
import { customAxios } from "@/utilities";

const getManufacturesAsync = async (request: IPaginatedRequest) => {
  const axios = await customAxios.getAxiosInstance();
  return axios.get<IPaginatedResponse<IManufacture>>("manufacture", {
    params: { Page: request.page, PageSize: request.pageSize },
  });
};

const postManufactureAsync = async (request: IPostManufactureRequest) => {
  const axios = await customAxios.getAxiosInstance();
  return axios.post<IManufacture>("manufacture", { Name: request.name, Country: request.country });
};

const manufactureService = {
  getManufacturesAsync,
  postManufactureAsync,
};

export default manufactureService;
