import { ICar } from "@/data-transfer-objects/entities/Car";
import {} from "@/data-transfer-objects/requests/PaginatedRequest";
import { ICarFilterSchemeResponse } from "@/data-transfer-objects/responses/CarFilterSchemeResponse";
import { IPaginatedResponse } from "@/data-transfer-objects/responses/PaginatedResponse";
import customAxios from "@/utilities/custom-axios";
import { IAxiosFilteredCarsRequest } from "./types";

const getCars = ({
  page,
  pageSize,
  minPrice,
  maxPrice,
  minYear,
  maxYear,
  selectedCountries,
  selectedManufactures,
  selectedCarTypes,
  cancelToken,
}: IAxiosFilteredCarsRequest) => {
  const axios = customAxios.getAxiosInstance();
  return axios.get<IPaginatedResponse<ICar>>("car", {
    cancelToken: cancelToken,
    params: {
      Page: page,
      PageSize: pageSize,
      MinPrice: minPrice,
      MaxPrice: maxPrice,
      MinYear: minYear,
      MaxYear: maxYear,
      SelectedCountries: selectedCountries,
      SelectedManufactures: selectedManufactures,
      SelectedCarTypes: selectedCarTypes,
    },
  });
};

const getCarFilterScheme = async () => {
  const axios = customAxios.getAxiosInstance();
  return axios.get<ICarFilterSchemeResponse>("car/filterscheme");
};

const carService = { getCars, getCarFilterScheme };

export default carService;
