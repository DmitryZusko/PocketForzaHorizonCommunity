import { IFilteredCarDesignRequest } from "@/data-transfer-objects/requests/FilteredCarDesignRequest";
import { IFilteredCarsRequest } from "@/data-transfer-objects/requests/FilteredCarsRequest";
import { IFilteredDesignRequest } from "@/data-transfer-objects/requests/FilteredDesignRequest";
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
