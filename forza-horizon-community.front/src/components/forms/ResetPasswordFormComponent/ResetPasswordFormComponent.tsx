import { Box, Button, TextField } from "@mui/material";

import { useResetPasswordFormComponent } from "./useResetPasswordFormComponent";
import { styles } from "../styles";
import { globalStyles } from "@/styles";

const ResetPasswordFormComponent = () => {
  const { formik } = useResetPasswordFormComponent();
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box sx={[globalStyles.centeredColumnFlexContainer, styles.outerContainer]}>
        <TextField
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
        <TextField
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
