import { TextField } from "@mui/material";
import { ISearchComponentProps } from "./types";
import { useSearchComponent } from "./useSearchComponent";

const SearchComponent = ({ threshold, handleQueryChange, ...props }: ISearchComponentProps) => {
  const { value, handleChange } = useSearchComponent({ threshold, handleQueryChange });
  return <TextField value={value} onChange={handleChange} {...props} />;
};

export default SearchComponent;
