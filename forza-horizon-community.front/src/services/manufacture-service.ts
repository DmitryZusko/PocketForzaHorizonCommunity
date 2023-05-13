import { IManufacture, IPaginatedResponse, IPostManufactureRequest } from "@/data-transfer-objects";
import { customAxios } from "@/utilities";

const getManufactures = (page?: number, pageCount?: number) => {
  const axios = customAxios.getAxiosInstance();
  return axios.get<IPaginatedResponse<IManufacture>>("manufacture", {
    params: { page, pageCount },
  });
};

const postManufacture = ({ name, country }: IPostManufactureRequest) => {
  const axios = customAxios.getAxiosInstance();
  return axios.post<IManufacture>("manufacture", { name, country });
};

const manufactureService = {
  getManufactures,
  postManufacture,
};

export default manufactureService;
