import { AppBar, Box, Toolbar } from "@mui/material";
import Image from "next/image";
import { ButtonWithMenuComponent } from "../ButtonWithMenuComponent";
import { CustomLinkComponent } from "../CustomLinkComponent";
import { NavBarBodyComponent } from "./components";
import { styles } from "./styles";
import { useNavBarComponent } from "./useNavBarComponent";

const NavBarComponent = () => {
  const { isTablet, navBarTheme } = useNavBarComponent();
  return (
    <AppBar position="sticky" sx={navBarTheme}>
      <Toolbar>
        <Box sx={styles.logo}>
          <CustomLinkComponent href="/" target="_self">
            <Image alt="logo" src="/logo.png" width={150} height={100} />
          </CustomLinkComponent>
        </Box>
        {isTablet ? (
          <NavBarBodyComponent />
        ) : (
          <ButtonWithMenuComponent mainButtonText={"Navigate"} handleClick={() => null}>
            <NavBarBodyComponent />
          </ButtonWithMenuComponent>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBarComponent;
