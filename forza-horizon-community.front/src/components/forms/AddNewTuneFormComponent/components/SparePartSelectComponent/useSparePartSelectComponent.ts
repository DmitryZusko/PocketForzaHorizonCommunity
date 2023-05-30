import { enumFormater } from "@/utilities";
import { useMemo } from "react";
import { ISparePartSelectComponentHook } from "./types";

export const useSparePartSelectComponent = ({ enumerator }: ISparePartSelectComponentHook) => {
  const items = useMemo(() => {
    return enumFormater.getAllValues(enumerator);
  }, [enumerator]);
  return { items };
};
