import {
  ICar,
  ICarFilterSchemeResponse,
  IPaginatedResponse,
  IPostCarRequest,
  ISimplifiedCar,
} from "@/data-transfer-objects";
import { customAxios } from "@/utilities";
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

const getCarNames = async () => {
  const axios = customAxios.getAxiosInstance();
  return axios.get<IPaginatedResponse<ISimplifiedCar>>("car/CarNames");
};

const postCar = async (request: IPostCarRequest) => {
  const axios = customAxios.getAxiosInstance();
  const data = new FormData();
  data.append("carTypeId", request.carTypeId);
  data.append("image", request.image);
  data.append("manufactureId", request.manufactureId);
  data.append("model", request.model);
  data.append("price", request.price.toString());
  data.append("year", request.year.toString());
  return axios.post<ICar>("car", data);
};

const carService = { getCars, getCarFilterScheme, getCarNames, postCar };

export default carService;
