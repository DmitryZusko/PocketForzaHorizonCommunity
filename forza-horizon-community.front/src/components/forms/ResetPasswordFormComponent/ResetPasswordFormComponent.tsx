import { Box, Button } from "@mui/material";

import { useResetPasswordFormComponent } from "./useResetPasswordFormComponent";
import { styles } from "../styles";
import { globalStyles } from "@/styles";
import { PasswordFieldComponent } from "../components";

const ResetPasswordFormComponent = () => {
  const { formik } = useResetPasswordFormComponent();
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box sx={[globalStyles.centeredColumnFlexContainer, styles.outerContainer]}>
        <PasswordFieldComponent
          label="New Password"
          helperText={formik.touched.newPassword && formik.errors.newPassword}
          {...{
            name: "confirmPassword",
            type: "password",
            value: formik.values.confirmPassword,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
            error: formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword),
          }}
        />
        <PasswordFieldComponent
          label="Confirm Password"
          helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
          {...{
            name: "confirmPassword",
            type: "password",
            value: formik.values.confirmPassword,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
            error: formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword),
          }}
        />
        <Button variant="contained" type="submit">
          Reset
        </Button>
      </Box>
    </form>
  );
};

export default ResetPasswordFormComponent;
