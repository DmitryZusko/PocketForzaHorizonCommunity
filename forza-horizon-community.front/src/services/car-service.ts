import { ICar } from "@/data-transfer-objects/entities/Car";
import { IGetCarsRequest } from "@/data-transfer-objects/requests/GetCarsRequest";
import { IPaginatedResponse } from "@/data-transfer-objects/responses/PaginatedResponse";
import customAxios from "@/utilities/custom-axios";

const getCars = ({ page, pageSize }: IGetCarsRequest) => {
  const axios = customAxios.getAxiosInstance();
  return axios.get<IPaginatedResponse<ICar>>("car", {
    params: {
      Page: page,
      PageSize: pageSize,
    },
  });
};

const carService = { getCars };

export default carService;
