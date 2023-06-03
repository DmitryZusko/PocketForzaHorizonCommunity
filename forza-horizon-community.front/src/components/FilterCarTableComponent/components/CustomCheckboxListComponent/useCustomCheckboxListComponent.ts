import { useCallback, useEffect, useMemo, useState } from "react";
import { ICustomCheckboxListComponentHook } from "../../types";

export const useCustomCheckboxListComponent = ({
  entities,
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

  const sortedEntities = useMemo(() => {
    return entities.sort();
  }, [entities]);

  useEffect(() => {
    applyChanges(selected);
  }, [selected, applyChanges]);

  return { sortedEntities, handleChange };
};
