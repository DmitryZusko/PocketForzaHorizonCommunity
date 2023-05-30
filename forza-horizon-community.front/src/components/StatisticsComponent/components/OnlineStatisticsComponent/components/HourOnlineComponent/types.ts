import { ContainerProps } from "@mui/material";

export interface IHourOnlineComponentHook {
  totalPlayers: number;
}

export interface IHourOnlineComponentProps extends IHourOnlineComponentHook {
  props?: ContainerProps;
}
