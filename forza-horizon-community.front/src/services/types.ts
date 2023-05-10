import {
  IFilteredCarDesignRequest,
  IFilteredCarsRequest,
  IFilteredDesignRequest,
} from "@/data-transfer-objects";
import { CancelToken } from "axios";

export interface IAxiosFilteredCarsRequest extends IFilteredCarsRequest {
  cancelToken: CancelToken;
}

export interface IAxiosFilteredDesignRequest extends IFilteredDesignRequest {
  cancelToken: CancelToken;
}

export interface IAxiosFilteredCarDesignRequest extends IFilteredCarDesignRequest {
  cancelToken: CancelToken;
}
