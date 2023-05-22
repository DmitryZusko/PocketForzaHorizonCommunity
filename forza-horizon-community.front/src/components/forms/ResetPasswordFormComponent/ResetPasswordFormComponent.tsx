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
          name="newPassword"
          label="New Password"
          type="password"
          value={formik.values.newPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
          helperText={formik.touched.newPassword && formik.errors.newPassword}
          sx={styles.textField}
        />
        <PasswordFieldComponent
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
          helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
          sx={styles.textField}
        />
        <Button variant="contained" type="submit">
          Reset
        </Button>
      </Box>
    </form>
  );
};

export default ResetPasswordFormComponent;
