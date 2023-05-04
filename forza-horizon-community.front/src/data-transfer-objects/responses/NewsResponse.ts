import { INewsItem } from "../entities/NewsItem";

export interface INewsResponse {
  appId: number;
  newsItems: INewsItem[];
  count: number;
}
