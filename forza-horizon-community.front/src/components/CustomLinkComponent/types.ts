export interface ICustomLinkComponentProps {
  href: string;
  target: LinkTarget;
}

export type LinkTarget = "_blank" | "_parent" | "_self" | "_top";
