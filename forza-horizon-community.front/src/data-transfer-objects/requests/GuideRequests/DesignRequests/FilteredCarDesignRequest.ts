import { IFilteredDesignRequest } from "./FilteredDesignRequest";

export interface IFilteredCarDesignRequest extends IFilteredDesignRequest {
  carId: string;
}
