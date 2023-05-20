import { Diversity1, Login } from "@mui/icons-material";
import { Button } from "@mui/material";
import { styles } from "./styles";
import { IAuthButtonsComponentProps } from "./types";
import { useAuthButtonsComponent } from "./useAuthButtonsComponent";

const AuthButtonsComponent = ({ isTablet }: IAuthButtonsComponentProps) => {
  const { handlesignInClick, handleSignUpClick } = useAuthButtonsComponent();
  return (
    <>
      <Button
        startIcon={<Login />}
        variant="contained"
        onClick={handlesignInClick}
        sx={styles.button}
      >
        Sign In
      </Button>
      <Button
        startIcon={<Diversity1 />}
        variant={isTablet ? "outlined" : "contained"}
        onClick={handleSignUpClick}
        sx={styles.button}
      >
        Sign Up
      </Button>
    </>
  );
};

export default AuthButtonsComponent;
