import { FormButtonGroupComponent } from "@/components";
import { globalStyles } from "@/styles";
import { Button, Paper, TextField } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import { FormHeaderComponent, PasswordFieldComponent } from "../components";
import { styles } from "../styles";
import { useSingInFormComponent } from "./useSingInFormComponent";

const SingInFormComponent = () => {
  const { formik, handleGoogleSignIn, handleCancel, handleForgotPasswordClick } =
    useSingInFormComponent();
  return (
    <form onSubmit={formik.handleSubmit}>
      <Paper sx={[globalStyles.centeredColumnFlexContainer, styles.outerContainer]}>
        <FormHeaderComponent text={"Sign In"} />
        <TextField
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={styles.textField}
        />
        <PasswordFieldComponent
          name="password"
          label="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          sx={styles.textField}
        />
        <FormButtonGroupComponent handleCancel={handleCancel} />
        <GoogleLogin onSuccess={handleGoogleSignIn} />
        <Button variant="text" onClick={handleForgotPasswordClick} sx={styles.forgotButton}>
          Forgot A Password?
        </Button>
      </Paper>
    </form>
  );
};

export default SingInFormComponent;
