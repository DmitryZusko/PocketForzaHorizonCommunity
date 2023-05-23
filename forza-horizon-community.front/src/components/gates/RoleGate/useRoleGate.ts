import { useAppSelector, userSelector } from "@/redux";
import { gateHandler } from "@/utilities";
import { IRoleGateHook } from "./types";

export const useRoleGate = ({ accessRoles }: IRoleGateHook) => {
  const { user } = useAppSelector(userSelector);

  const isAvailable = gateHandler.isComponentAvailable(user?.roles || [], accessRoles);

  return { isAvailable };
};
