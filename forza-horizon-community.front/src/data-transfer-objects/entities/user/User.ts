import { ICampaignStatistics } from "./CampaignStatistics";
import { IGeneralStatistics } from "./GeneralStatistics";
import { IOnlineStatistics } from "./OnlineStatistics";
import { IRecordsStatistics } from "./RecordsStatistics";

export interface IUser {
  is: string;
  email: string;
  username: string;
  roles: string[];
  ownedCars: string[];
  generalStatistics: IGeneralStatistics;
  campaignstatistics: ICampaignStatistics;
  onlineStatistics: IOnlineStatistics;
  recordsStatistics: IRecordsStatistics;
}
