import { TextField } from "@mui/material";
import { ISearchComponentProps } from "./types";
import { useSearchComponent } from "./useSearchComponent";

const SearchComponent = ({ trashhold, handleQueryChange, ...props }: ISearchComponentProps) => {
  const { value, handleChange } = useSearchComponent({ trashhold, handleQueryChange });
  return <TextField value={value} onChange={handleChange} {...props} />;
};

export default SearchComponent;
