export interface ISearchComponentHook {
  threshold: number;
  handleQueryChange: (newQuery: string) => void;
}

export interface ISearchComponentProps extends ISearchComponentHook {}
