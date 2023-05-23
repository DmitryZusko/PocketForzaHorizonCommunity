import { IFilteredCarsRequest } from "./FilteredCarsRequest";

export interface IFilteredOwndCarsRequest extends IFilteredCarsRequest {
  ownedCars?: string;
}
