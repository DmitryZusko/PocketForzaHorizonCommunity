import { Diversity1, Login } from "@mui/icons-material";
import { Button } from "@mui/material";
import { styles } from "./styles";
import { IAuthButtonsComponentProps } from "./types";
import { useAuthButtonsComponent } from "./useAuthButtonsComponent";

const AuthButtonsComponent = ({ isTablet }: IAuthButtonsComponentProps) => {
  const { themeMode, handleSignInClick, handleSignUpClick } = useAuthButtonsComponent();
  return (
    <>
      <Button
        startIcon={<Login />}
        variant="contained"
        onClick={handleSignInClick}
        sx={styles.button}
      >
        Sign In
      </Button>
      <Button
        startIcon={<Diversity1 />}
        variant={isTablet ? "outlined" : "contained"}
        color={themeMode === "light" ? "secondary" : "primary"}
        onClick={handleSignUpClick}
        sx={styles.button}
      >
        Sign Up
      </Button>
    </>
  );
};

export default AuthButtonsComponent;
