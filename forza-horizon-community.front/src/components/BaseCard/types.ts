export interface IBaseCard {
  thumbnail?: string;
  cardTitle: string;
  body: string;
  footer?: JSX.Element;
  imageWidth?: number;
  imageHeight?: number;
}
