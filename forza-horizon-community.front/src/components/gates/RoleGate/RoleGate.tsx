import { PropsWithChildren } from "react";
import { IRoleGateProps } from "./types";
import { useRoleGate } from "./useRoleGate";

const RoleGate = ({ accessRoles, children }: PropsWithChildren<IRoleGateProps>) => {
  const { isAvailable } = useRoleGate({ accessRoles });

  if (!isAvailable) return null;
  return <>{children}</>;
};

export default RoleGate;
