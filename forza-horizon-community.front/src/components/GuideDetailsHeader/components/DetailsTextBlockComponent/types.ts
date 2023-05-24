export interface IDetailsTextBlockComponentHook {
  isDesign?: boolean;
}

export interface IDetailsTextBlockComponentProps extends IDetailsTextBlockComponentHook {
  title: string;
  authorName: string;
  shareCode: string;
  rating: number;
  creationDate: Date;
}
