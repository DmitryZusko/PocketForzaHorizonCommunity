import { NightsStay, WbSunny } from "@mui/icons-material";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import Image from "next/image";
import { baseTheme } from "../constants";
import { CustomLinkComponent } from "../CustomLinkComponent";
import { AnonymouseNavbarBodyComponent, AuthorizedNavbarBodyComponent } from "./components";
import { styles } from "./styles";
import { useNavBarComponent } from "./useNavBarComponent";

const NavBarComponent = ({ ...props }) => {
  const { isLogged, navBarTheme, themeMode, handleThemeModeChange } = useNavBarComponent();
  return (
    <AppBar position="sticky" sx={navBarTheme} {...props}>
      <Toolbar>
        <Box sx={styles.logo}>
          <CustomLinkComponent href="/" target="_self">
            <Image alt="logo" src="/logo.png" width={150} height={100} />
          </CustomLinkComponent>
        </Box>
        {isLogged ? <AuthorizedNavbarBodyComponent /> : <AnonymouseNavbarBodyComponent />}
        <Box margin={baseTheme.spacing(7)}>
          <IconButton onClick={handleThemeModeChange} color={"secondary"}>
            {themeMode === "light" ? <WbSunny /> : <NightsStay />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBarComponent;
