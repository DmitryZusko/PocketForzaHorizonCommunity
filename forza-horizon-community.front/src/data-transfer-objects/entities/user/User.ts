import { ICampaignStatistics } from "./CampaignStatistics";
import { IGeneralStatistics } from "./GeneralStatistics";
import { IOnlineStatistics } from "./OnlineStatistics";
import { IRecordsStatistics } from "./RecordsStatistics";

export interface IUser {
  id: string;
  email: string;
  username: string;
  roles: string[];
  ownedCarsByUser: string[];
  generalStatistics: IGeneralStatistics;
  campaignstatistics: ICampaignStatistics;
  onlineStatistics: IOnlineStatistics;
  recordsStatistics: IRecordsStatistics;
}
