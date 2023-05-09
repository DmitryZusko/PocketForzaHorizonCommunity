import { useCallback, useState } from "react";
import { ISearchComponentHook } from "./types";

export const useSearchComponent = ({ trashhold, handleQueryChange }: ISearchComponentHook) => {
  const [value, setValue] = useState("");

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      setValue(newValue);
      if (newValue.length === 0 || newValue.length >= trashhold) handleQueryChange(newValue);
    },
    [trashhold, handleQueryChange],
  );
  return { value, handleChange };
};
