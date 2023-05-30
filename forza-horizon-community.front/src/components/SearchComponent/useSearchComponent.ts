import { useCallback, useState } from "react";
import { ISearchComponentHook } from "./types";

export const useSearchComponent = ({ threshold, handleQueryChange }: ISearchComponentHook) => {
  const [value, setValue] = useState("");

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      setValue(newValue);
      if (newValue.length === 0 || newValue.length >= threshold) handleQueryChange(newValue);
    },
    [threshold, handleQueryChange],
  );
  return { value, handleChange };
};
