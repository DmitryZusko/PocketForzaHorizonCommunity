import { ButtonWithMenuComponent } from "@/components";
import { Box } from "@mui/material";
import { AuthButtonsComponent } from "./components";
import { useAnonymouseNavbarBodyComponent } from "./useAnonymouseNavbarBodyComponent";

const AnonymouseNavbarBodyComponent = () => {
  const { isTablet } = useAnonymouseNavbarBodyComponent();
  return (
    <>
      {isTablet ? (
        <Box>
          <AuthButtonsComponent isTablet={isTablet} />
        </Box>
      ) : (
        <ButtonWithMenuComponent mainButtonText={"Join Us!"} handleClick={() => null}>
          <AuthButtonsComponent isTablet={isTablet} />
        </ButtonWithMenuComponent>
      )}
    </>
  );
};

export default AnonymouseNavbarBodyComponent;
