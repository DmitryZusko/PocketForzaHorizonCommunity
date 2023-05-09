export interface ISearchComponentHook {
  trashhold: number;
  handleQueryChange: (newQuery: string) => void;
}

export interface ISearchComponentProps extends ISearchComponentHook {}
