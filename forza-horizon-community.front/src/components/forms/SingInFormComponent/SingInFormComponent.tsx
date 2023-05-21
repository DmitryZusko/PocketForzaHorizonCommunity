import { FormButtonGroupComponent } from "@/components";
import { globalStyles } from "@/styles";
import { Paper, TextField } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import { FormHeaderComponent } from "../components";
import { styles } from "../styles";
import { useSingInFormComponent } from "./useSingInFormComponent";

const SingInFormComponent = () => {
  const { formik, handleGoogleSignIn, handleCancel } = useSingInFormComponent();
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
        <TextField
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          sx={styles.textField}
        />
        <FormButtonGroupComponent handleCancel={handleCancel} />
        <GoogleLogin onSuccess={handleGoogleSignIn} />
      </Paper>
    </form>
  );
};

export default SingInFormComponent;
