import { ButtonWithMenuComponent, CustomLinkComponent } from "@/components";
import { Button } from "@mui/material";
import { styles } from "./styles";
import { useNavBarBodyComponent } from "./useNavBarBodyComponent";

const NavBarBodyComponent = () => {
  const { buttonsStyle, handleGuidesButtonclick } = useNavBarBodyComponent();
  return (
    <>
      <CustomLinkComponent href="/" target="_self">
        <Button variant="contained" sx={buttonsStyle}>
          Home
        </Button>
      </CustomLinkComponent>
      <CustomLinkComponent href="/cars" target="_self">
        <Button variant="contained" sx={buttonsStyle}>
          Cars
        </Button>
      </CustomLinkComponent>
      <CustomLinkComponent href="" target="_self">
        <Button variant="contained" sx={buttonsStyle}>
          Personal Statistics
        </Button>
      </CustomLinkComponent>
      <ButtonWithMenuComponent mainButtonText="Guides" handleClick={handleGuidesButtonclick}>
        <CustomLinkComponent href="/designs" target={"_self"}>
          <Button variant="contained" sx={styles.nestedButton}>
            Designs
          </Button>
        </CustomLinkComponent>
        <CustomLinkComponent href="/tunes" target={"_self"}>
          <Button variant="contained" sx={styles.nestedButton}>
            Tunes
          </Button>
        </CustomLinkComponent>
      </ButtonWithMenuComponent>
    </>
  );
};

export default NavBarBodyComponent;
