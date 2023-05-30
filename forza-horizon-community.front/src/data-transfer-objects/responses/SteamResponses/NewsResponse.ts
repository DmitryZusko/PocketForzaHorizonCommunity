import { INewsItem } from "../../entities";

export interface INewsResponse {
  appId: number;
  newsItems: INewsItem[];
  count: number;
}
