import { IFilteredCarsRequest } from "@/data-transfer-objects/requests/FilteredCarsRequest";
import { CancelToken } from "axios";

export interface IAxiosFilteredCarsRequest extends IFilteredCarsRequest {
  cancelToken: CancelToken;
}
