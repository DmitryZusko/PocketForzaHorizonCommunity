import { OrderDirection } from "@/components";
import {
  IAchivement,
  ICar,
  ICarType,
  IDesign,
  IManufacture,
  INewsItem,
  ISimplifiedCar,
  ITune,
} from "@/data-transfer-objects";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

export type ActionWithPayload<Payload> = ReturnType<ActionCreatorWithPayload<Payload>>;

export interface INewsState {
  isLoading: boolean;
  news: INewsItem[];
  count: number;
}

export interface ISortingPayload<TEntity> {
  order: OrderDirection;
  orderBy: keyof TEntity;
}

export interface IGameStatisticsState {
  isLoadingPlayersNumber: boolean;
  totalPlayers: number;
  isLoadingAchievements: boolean;
  achievements: IAchivement[];
}

export interface IDesignState {
  isLoadingLatest: boolean;
  latestDesigns: IDesign[];
  isLoadingDesigns: boolean;
  designs: IDesign[];
  page: number;
  pageSize: number;
  totalEntities: number;
}

export interface ITuneState {
  isLoadingLatest: boolean;
  latestTunes: ITune[];
  isLoadingTunes: boolean;
  tunes: ITune[];
  page: number;
  pageSize: number;
  totalEntities: number;
}

export interface ICarState {
  isLoadingCars: boolean;
  cars: ICar[];
  page: number;
  pageSize: number;
  totalEntities: number;
}

export interface IFiltetSchemeState {
  isLoadingCarTypes: boolean;
  carTypes: ICarType[];
  totalCarTypes: number;
  isLoadingManufacture: boolean;
  manufactures: IManufacture[];
  totalManufactures: number;
  isLoadingCarNames: boolean;
  carNames: ISimplifiedCar[];
  isLoadingCarFilterScheme: boolean;
  minPrice: number;
  maxPrice: number;
  minYear: number;
  maxYear: number;
}

export interface ISelectedFilterParamsState {
  selectedPriceRange: number[];
  selectedYearRange: number[];
  selectedManufactures: string[];
  selectedCarTypes: string[];
  selectedCountries: string[];
}
