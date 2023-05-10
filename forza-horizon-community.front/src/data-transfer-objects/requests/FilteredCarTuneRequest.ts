import { IFilteredTuneRequest } from "./FilteredTuneRequest";

export interface IFilteredCarTuneRequest extends IFilteredTuneRequest {
  carId: string;
}
