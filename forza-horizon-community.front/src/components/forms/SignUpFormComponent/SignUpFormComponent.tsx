import { FormButtonGroupComponent } from "@/components";
import { globalStyles } from "@/styles";
import { Paper, TextField } from "@mui/material";
import { FormHeaderComponent, PasswordFieldComponent } from "../components";
import { styles } from "../styles";
import { ISignUpFormComponentProps } from "./types";
import { useSignUpFormComponent } from "./useSignUpFormComponent";

const SignUpFormComponent = ({ signUpRole, formHeader = "Sign Up" }: ISignUpFormComponentProps) => {
  const { formik, handleCancel } = useSignUpFormComponent({ signUpRole });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Paper sx={[globalStyles.centeredColumnFlexContainer, styles.outerContainer]}>
        <FormHeaderComponent text={formHeader} />
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
          name="username"
          label="Username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
          sx={styles.textField}
        />
        <PasswordFieldComponent
          label="Password"
          helperText={formik.touched.password && formik.errors.password}
          {...{
            name: "password",
            value: formik.values.password,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
            error: formik.touched.password && Boolean(formik.errors.password),
          }}
        />
        <PasswordFieldComponent
          label="Confirm Password"
          helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
          {...{
            name: "confirmPassword",
            value: formik.values.confirmPassword,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
            error: formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword),
          }}
        />
        <FormButtonGroupComponent handleCancel={handleCancel} />
      </Paper>
    </form>
  );
};

export default SignUpFormComponent;
