import { AppBar, Box, Button, Toolbar } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { ButtonWithMenuComponent } from "../ButtonWithMenuComponent";
import { CustomLinkComponent } from "../CustomLinkComponent";

const NavBarComponent = () => {
  const router = useRouter();

  const handleGuidesButtonclick = useCallback(() => {
    router.push("/guides");
  }, [router]);
  return (
    <AppBar position="sticky">
      <Toolbar>
        <CustomLinkComponent href="/" target="_self">
          <Image alt="logo" src="/logo.png" width={150} height={100} />
        </CustomLinkComponent>
        <CustomLinkComponent href="/" target="_self">
          <Button variant="contained">News</Button>
        </CustomLinkComponent>
        <CustomLinkComponent href="/cars" target="_self">
          <Button variant="contained">Cars</Button>
        </CustomLinkComponent>
        <ButtonWithMenuComponent mainButtonText="Guides" handleClick={handleGuidesButtonclick}>
          <Box>
            <CustomLinkComponent href="/designs" target={"_self"}>
              <Button variant="contained">Designs</Button>
            </CustomLinkComponent>
            <CustomLinkComponent href="/tunes" target={"_self"}>
              <Button variant="contained">Tunes</Button>
            </CustomLinkComponent>
          </Box>
        </ButtonWithMenuComponent>
        <CustomLinkComponent href="" target="_self">
          <Button variant="contained">Personal Statistics</Button>
        </CustomLinkComponent>
      </Toolbar>
    </AppBar>
  );
};

export default NavBarComponent;
