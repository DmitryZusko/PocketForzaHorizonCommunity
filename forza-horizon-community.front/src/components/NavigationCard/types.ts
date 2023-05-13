import { IBaseCardProps } from "../BaseCard";
import { LinkTarget } from "../CustomLinkComponent";

export interface INavigationCardProps extends IBaseCardProps {
  navigationLink: string;
  target: LinkTarget;
}
