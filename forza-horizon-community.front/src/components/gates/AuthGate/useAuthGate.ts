import { authSelector, setIsSignInOpen, useAppDispatch, useAppSelector } from "@/redux";
import { gateHandler } from "@/utilities";
import { useRouter } from "next/router";
import { IAuthGateHook } from "./types";

export const useAuthGate = (authSettings: IAuthGateHook) => {
  const { isLogged, user } = useAppSelector(authSelector);

  const dispatch = useAppDispatch();
  const router = useRouter();

  const isAvailable = gateHandler.isRouteAvailable(
    isLogged,
    user,
    authSettings.accessLevel,
    authSettings.accessRoles,
  );

  if (!isAvailable) {
    router.replace("/");
    if (!isLogged) {
      dispatch(setIsSignInOpen(true));
    }
  }

  return { isAvailable };
};
