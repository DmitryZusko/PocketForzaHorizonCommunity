import { useCallback, useEffect, useState } from "react";
import { ICustomCheckboxListComponentHook } from "../../types";

export const useCustomCheckboxListComponent = ({
  applyChanges,
}: ICustomCheckboxListComponentHook) => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleChange = useCallback(
    (entity: string) => () => {
      if (!selected.includes(entity)) {
        setSelected([...selected, entity]);
      } else {
        setSelected(selected.filter((item) => item != entity));
      }
    },
    [selected],
  );

  useEffect(() => {
    applyChanges(selected);
  }, [selected, applyChanges]);

  return { handleChange };
};
