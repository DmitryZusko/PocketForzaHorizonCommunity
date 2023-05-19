import { InputAdornment, TextField } from "@mui/material";
import { ISearchComponentProps } from "./types";
import { useSearchComponent } from "./useSearchComponent";
import SearchIcon from "@mui/icons-material/Search";

const SearchComponent = ({
  label,
  threshold,
  handleQueryChange,
  ...props
}: ISearchComponentProps) => {
  const { value, handleChange } = useSearchComponent({ threshold, handleQueryChange });
  return (
    <TextField
      value={value}
      label={label}
      fullWidth
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      placeholder="Start typing..."
      {...props}
    >
      <SearchIcon />
    </TextField>
  );
};

export default SearchComponent;
