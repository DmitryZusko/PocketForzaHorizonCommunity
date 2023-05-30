import { AccessRole, AuthAccessLevel } from "@/components";
import { IUser } from "@/data-transfer-objects";

const isRouteAvailable = (
  isLogged: boolean,
  user: IUser | undefined,
  accessLevel: AuthAccessLevel,
  accessRoles: string[],
) => {
  if (accessLevel === AuthAccessLevel.Anonymouse) return true;

  if (!isLogged && accessLevel === AuthAccessLevel.Unauthorized) return true;

  if (isLogged && accessLevel === AuthAccessLevel.Authorized) {
    const rolesCount = user?.roles.length || 0;
    for (let i = 0; i < rolesCount; i++) {
      if (accessRoles.includes(user?.roles[i] || "")) return true;
    }
  }

  return false;
};

const isComponentAvailable = (userRoles: string[], accessRoles: string[]) => {
  for (let i = 0; i < userRoles.length; i++) {
    if (accessRoles.includes(userRoles[i])) return true;
  }

  return false;
};

export const setPageProps = (accessLevel: AuthAccessLevel, accessRoles?: string[]) => {
  return {
    accessLevel: accessLevel,
    accessRoles: accessRoles || Object.values(AccessRole),
  };
};

const gateHandler = { isRouteAvailable, isComponentAvailable, setPageProps };

export default gateHandler;
