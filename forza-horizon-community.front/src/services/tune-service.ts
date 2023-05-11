import { IGetByIdRequest, IPaginatedResponse, ITune, ITuneFullInfo } from "@/data-transfer-objects";
import { customAxios } from "@/utilities";
import { IAxiosFilteredCarTuneRequest, IAxiosFilteredTuneRequest } from "./types";

const getTunes = async ({
  page,
  pageSize,
  searchQuery,
  cancelToken,
}: IAxiosFilteredTuneRequest) => {
  const axios = customAxios.getAxiosInstance();

  if (searchQuery.length > 0) {
    return axios.get<IPaginatedResponse<ITune>>("tune", {
      cancelToken: cancelToken,
      params: {
        Page: page,
        PageSize: pageSize,
        Searchquery: searchQuery,
      },
    });
  }

  return axios.get<IPaginatedResponse<ITune>>("tune", {
    cancelToken: cancelToken,
    params: {
      Page: page,
      PageSize: pageSize,
    },
  });
};

const getAllIds = () => {
  const axios = customAxios.getAxiosInstance();
  return axios.get<string[]>("tune/Ids");
};

const getTunesByCarId = async ({
  page,
  pageSize,
  searchQuery,
  carId,
  cancelToken,
}: IAxiosFilteredCarTuneRequest) => {
  const axios = customAxios.getAxiosInstance();

  if (searchQuery.length > 0) {
    return axios.get<IPaginatedResponse<ITune>>("tune/ByCar", {
      cancelToken: cancelToken,
      params: {
        Page: page,
        PageSize: pageSize,
        CarId: carId,
        Searchquery: searchQuery,
      },
    });
  }

  return axios.get<IPaginatedResponse<ITune>>("tune/ByCar", {
    cancelToken: cancelToken,
    params: {
      Page: page,
      PageSize: pageSize,
      CarId: carId,
    },
  });
};

const getLatestTunes = (amount: number) => {
  const axios = customAxios.getAxiosInstance();
  return axios.get<ITune[]>("tune/getlasttunes", { params: { TunesAmount: amount } });
};

const getById = ({ id }: IGetByIdRequest) => {
  const axios = customAxios.getAxiosInstance();
  return axios.get<ITuneFullInfo>("tune/info", { params: { id: id } });
};

const tuneService = {
  getTunes,
  getAllIds,
  getTunesByCarId,
  getLatestTunes,
  getById,
};

export default tuneService;
