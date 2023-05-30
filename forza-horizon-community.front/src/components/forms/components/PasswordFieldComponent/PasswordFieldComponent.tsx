import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { PropsWithChildren } from "react";
import { styles } from "./styles";
import { IPasswordFieldComponentProps } from "./types";
import { usePasswordFieldComponent } from "./usePasswordFieldComponent";

const PasswordFieldComponent = ({
  label,
  helperText,
  ...props
}: PropsWithChildren<IPasswordFieldComponentProps>) => {
  const { isShowPassword, toogleShowPassword } = usePasswordFieldComponent();
  return (
    <FormControl sx={styles.outerContainer} fullWidth>
      <Box sx={styles.inputContainer}>
        <InputLabel htmlFor={label}>{label}</InputLabel>
        <OutlinedInput
          id={label}
          type={isShowPassword ? "text" : "password"}
          label={label}
          fullWidth
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={toogleShowPassword} edge="end">
                {isShowPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          sx={styles.input}
          {...props}
        />
      </Box>
      <FormHelperText sx={styles.helperTextForm}>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default PasswordFieldComponent;
