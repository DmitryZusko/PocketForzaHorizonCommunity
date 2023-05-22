import { FormButtonGroupComponent } from "@/components/FormButtonGroupComponent";
import { globalStyles } from "@/styles";
import { Paper, TextField } from "@mui/material";
import { FormHeaderComponent } from "../components";
import { styles } from "../styles";
import { useEnterEmailFormComponent } from "./useEnterEmailFormComponent";

const EnterEmailFormComponent = () => {
  const { formik, handleCancel } = useEnterEmailFormComponent();
  return (
    <form onSubmit={formik.handleSubmit}>
      <Paper sx={[globalStyles.centeredColumnFlexContainer, styles.outerContainer]}>
        <FormHeaderComponent text={"Reset"} />
        <TextField
          name="email"
          label="Your email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={styles.textField}
        />
        <FormButtonGroupComponent handleCancel={handleCancel} />
      </Paper>
    </form>
  );
};

export default EnterEmailFormComponent;
