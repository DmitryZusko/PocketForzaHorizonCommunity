import { ButtonWithMenuComponent } from "@/components";
import { NavBarBodyComponent } from "./NavBarBodyComponent";
import { useAuthorizedNavbarBodyComponent } from "./useAuthorizedNavbarBodyComponent";

const AuthorizedNavbarBodyComponent = () => {
  const { isTablet } = useAuthorizedNavbarBodyComponent();
  return (
    <>
      {isTablet ? (
        <NavBarBodyComponent />
      ) : (
        <ButtonWithMenuComponent mainButtonText={"Navigate"} handleClick={() => null}>
          <NavBarBodyComponent />
        </ButtonWithMenuComponent>
      )}
    </>
  );
};

export default AuthorizedNavbarBodyComponent;
