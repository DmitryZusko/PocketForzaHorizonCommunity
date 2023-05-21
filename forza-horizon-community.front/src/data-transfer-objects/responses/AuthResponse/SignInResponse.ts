import { IUser } from "@/data-transfer-objects/entities";
import { ITokenResponse } from "./TokenResponse";

export interface ISignInResponse extends ITokenResponse {
  user: IUser;
}
