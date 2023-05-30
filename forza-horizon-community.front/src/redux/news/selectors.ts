import { createSelector } from "reselect";
import { RootState } from "../store";

export const newsStateSelector = ({ news }: RootState) => news;

export const newsSelector = createSelector(newsStateSelector, ({ isLoading, news }) => ({
  isLoading,
  news,
}));

export const isNewsLoadingSelector = createSelector(newsStateSelector, ({ isLoading }) => ({
  isLoading,
}));
