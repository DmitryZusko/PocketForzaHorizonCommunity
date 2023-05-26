import { ContainerProps } from "@mui/material";

export interface IWeeklyOnlineComponentHook {
  totalPlayers: number;
}

export interface IWeeklyOnlineComponentProps extends IWeeklyOnlineComponentHook {
  props?: ContainerProps;
}
