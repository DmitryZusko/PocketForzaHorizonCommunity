import { IUser } from "@/data-transfer-objects/entities";
import { ITokenResponse } from "./TokenResponse";

export interface ISignUpResponse extends ITokenResponse {
  user: IUser;
  isEmailSend: boolean;
}
