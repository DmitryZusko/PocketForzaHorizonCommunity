import { AuthAccessLevel } from "@/components/constants";

export interface IAuthGateHook {
  accessLevel: AuthAccessLevel;
  accessRoles: string[];
}

export interface IAuthGateProps extends IAuthGateHook {}
