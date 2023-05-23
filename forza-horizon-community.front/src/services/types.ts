import {
  IFilteredCarDesignRequest,
  IFilteredCarsRequest,
  IFilteredCarTuneRequest,
  IFilteredDesignRequest,
  IFilteredOwndCarsRequest,
  IFilteredTuneRequest,
} from "@/data-transfer-objects";
import { CancelToken } from "axios";

export interface IAxiosFilteredCarsRequest extends IFilteredCarsRequest {
  cancelToken: CancelToken;
}

export interface IAxiosFilteredOwndCarsRequest extends IFilteredOwndCarsRequest {
  cancelToken: CancelToken;
}

export interface IAxiosFilteredDesignRequest extends IFilteredDesignRequest {
  cancelToken: CancelToken;
}

export interface IAxiosFilteredCarDesignRequest extends IFilteredCarDesignRequest {
  cancelToken: CancelToken;
}

export interface IAxiosFilteredTuneRequest extends IFilteredTuneRequest {
  cancelToken: CancelToken;
}

export interface IAxiosFilteredCarTuneRequest extends IFilteredCarTuneRequest {
  cancelToken: CancelToken;
}
