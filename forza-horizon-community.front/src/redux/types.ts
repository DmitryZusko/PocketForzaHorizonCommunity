import { IAchivement } from "@/data-transfer-objects/entities/Achivement";
import { IDesign } from "@/data-transfer-objects/entities/IDesign";
import { INewsItem } from "@/data-transfer-objects/entities/NewsItem";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

export type ActionWithPayload<Payload> = ReturnType<ActionCreatorWithPayload<Payload>>;

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

export interface IDesignState {
  isLoadingLatest: boolean;
  latestDesigns: IDesign[];
}
