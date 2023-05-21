import { PropsWithChildren } from "react";
import { IAuthGateProps } from "./types";
import { useAuthGate } from "./useAuthGate";

const AuthGate = ({
  authSettings,
  children,
}: PropsWithChildren<{ authSettings: IAuthGateProps }>) => {
  const { isAvailable } = useAuthGate(authSettings);

  if (!isAvailable) return null;

  return <>{children}</>;
};

export default AuthGate;
