export interface IBaseCard {
  thumbnail?: string;
  cardTitle: string;
  body: string | JSX.Element;
  footer?: JSX.Element;
  imageWidth?: number;
  imageHeight?: number;
}
