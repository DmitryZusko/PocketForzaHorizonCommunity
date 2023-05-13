import { IPaginatedRequest } from "../PaginatedRequest";

export interface IFilteredCarsRequest extends IPaginatedRequest {
  minPrice?: number;
  maxPrice?: number;
  minYear?: number;
  maxYear?: number;
  selectedCountries?: string;
  selectedManufactures?: string;
  selectedCarTypes?: string;
}
