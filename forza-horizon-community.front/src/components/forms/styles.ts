import { baseTheme } from "../constants";

export const styles = {
  outerContainer: {
    padding: `${baseTheme.spacing(20)}!important`,
    border: `5px solid ${baseTheme.palette.secondary.main}`,
    borderRadius: "20px",
  },

  textField: { margin: baseTheme.spacing(5), width: "100%" },

  forgotButton: {
    marginY: baseTheme.spacing(7),
  },
};
