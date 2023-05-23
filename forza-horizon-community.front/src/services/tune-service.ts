import {
  IGetByIdRequest,
  IPaginatedResponse,
  IPostTuneRequest,
  ITune,
  ITuneFullInfo,
} from "@/data-transfer-objects";
import { customAxios } from "@/utilities";
import { IAxiosFilteredCarTuneRequest, IAxiosFilteredTuneRequest } from "./types";

const getTunesAsync = async (request: IAxiosFilteredTuneRequest) => {
  const axios = await customAxios.getAxiosInstance();

  if (request.searchQuery.length > 0) {
    return axios.get<IPaginatedResponse<ITune>>("tune", {
      cancelToken: request.cancelToken,
      params: {
        Page: request.page,
        PageSize: request.pageSize,
        Searchquery: request.searchQuery,
      },
    });
  }

  return axios.get<IPaginatedResponse<ITune>>("tune", {
    cancelToken: request.cancelToken,
    params: {
      Page: request.page,
      PageSize: request.pageSize,
    },
  });
};

const getAllIdsAsync = async () => {
  const axios = await customAxios.getAxiosInstance();
  return axios.get<string[]>("tune/Ids");
};

const getTunesByCarIdAsync = async (request: IAxiosFilteredCarTuneRequest) => {
  const axios = await customAxios.getAxiosInstance();

  if (request.searchQuery.length > 0) {
    return axios.get<IPaginatedResponse<ITune>>("tune/ByCar", {
      cancelToken: request.cancelToken,
      params: {
        Page: request.page,
        PageSize: request.pageSize,
        CarId: request.carId,
        Searchquery: request.searchQuery,
      },
    });
  }

  return axios.get<IPaginatedResponse<ITune>>("tune/ByCar", {
    cancelToken: request.cancelToken,
    params: {
      Page: request.page,
      PageSize: request.pageSize,
      CarId: request.carId,
    },
  });
};

const getLatestTunesAsync = async (amount: number) => {
  const axios = await customAxios.getAxiosInstance();
  return axios.get<ITune[]>("tune/getlasttunes", { params: { TunesAmount: amount } });
};

const getByIdAsync = async (request: IGetByIdRequest) => {
  const axios = await customAxios.getAxiosInstance();
  return axios.get<ITuneFullInfo>("tune/info", { params: { id: request.id } });
};

const postTuneAsync = async (request: IPostTuneRequest) => {
  const axios = await customAxios.getAxiosInstance();
  return axios.post("tune", {
    Title: request.title,
    ForzaShareCode: request.forzaShareCode,
    AuthorId: request.authorId,
    CarId: request.carId,
    EngineDescription: request.engineDescription,
    Engine: request.engine,
    Aspiration: request.aspiration,
    Intake: request.intake,
    Ignition: request.ignition,
    Displacement: request.displacement,
    Exhaust: request.exhaust,
    HandlingDescription: request.handlingDescription,
    Brakes: request.brakes,
    Suspension: request.suspension,
    AntiRollBars: request.antiRollBars,
    RollCage: request.rollCage,
    DrivetrainDescription: request.drivetrainDescription,
    Clutch: request.clutch,
    Transmission: request.transmission,
    Differential: request.differential,
    TiresDescription: request.tiresDescription,
    Compound: request.compound,
    FrontTireWidth: request.frontTireWidth,
    RearTireWidth: request.rearTireWidth,
    FrontTrackWidth: request.frontTrackWidth,
    RearTrackWidth: request.rearTrackWidth,
  });
};

const tuneService = {
  getTunesAsync,
  getAllIdsAsync,
  getTunesByCarIdAsync,
  getLatestTunesAsync,
  getByIdAsync,
  postTuneAsync,
};

export default tuneService;
