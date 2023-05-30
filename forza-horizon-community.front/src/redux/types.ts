import { OrderDirection, ThemeMode } from "@/components";
import {
  IAchivement,
  ICar,
  ICarType,
  IDesign,
  IDesignFullInfo,
  IManufacture,
  INewsItem,
  ISimplifiedCar,
  ITune,
  ITuneFullInfo,
  IUser,
} from "@/data-transfer-objects";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

export type ActionWithPayload<Payload> = ReturnType<ActionCreatorWithPayload<Payload>>;

export interface ISortingPayload<TEntity> {
  order: OrderDirection;
  orderBy: keyof TEntity;
}

export interface IState {
  news: INewsState;
  gameStatistics: IGameStatisticsState;
  design: IDesignState;
  tune: ITuneState;
  car: ICarState;
  filterScheme: IFiltetSchemeState;
  selectedFilterParams: ISelectedFilterParamsState;
  guideUploader: IGuideUploaderState;
  modal: IModalState;
  settings: ISettingsState;
  auth: IAuthState;
}

export interface INewsState {
  isLoading: boolean;
  news: INewsItem[];
  count: number;
}

export interface IGameStatisticsState {
  isLoadingPlayersNumber: boolean;
  totalPlayers: number;
  isLoadingAchievements: boolean;
  achievements: IAchivement[];
}

export interface IEntityStateBase<TEntity> {
  isLoadingEntities: boolean;
  entities: TEntity[];
  page: number;
  pageSize: number;
  totalEntities: number;
}

export interface ICarState extends IEntityStateBase<ICar> {}

interface IGuideStateBase<TEntity, TFullEntity> extends IEntityStateBase<TEntity> {
  isLoadingLatest: boolean;
  latestEntities: TEntity[];
  isLoadingSelected: boolean;
  selectedEntity: TFullEntity | undefined;
}

export interface IDesignState extends IGuideStateBase<IDesign, IDesignFullInfo> {}

export interface ITuneState extends IGuideStateBase<ITune, ITuneFullInfo> {}

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
  isOnlyOwned: boolean;
}

export interface IGuideUploaderState {
  isDesignThumbnailError: boolean;
  designThumbnail: File | undefined;
  isDesignGalleryError: boolean;
  designGallery: File[];
}

export interface IModalState {
  isAddManufactureOpen: boolean;
  isAddCarTypeOpen: boolean;
  isAddCarOpen: boolean;
  isSignInOpen: boolean;
  isSignUpOpen: boolean;
  isForgotPasswordOpen: boolean;
}

export interface ISettingsState {
  themeMode: ThemeMode;
}

export interface IAuthState {
  isLogged: boolean;
  user: IUser | undefined;
}
