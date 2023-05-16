import { baseTheme } from "../constants";

export const styles = {
  textTitle: {
    mt: baseTheme.spacing(20),
    mb: baseTheme.spacing(10),
    fontWeight: "bold",
  },

  outerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: baseTheme.spacing(10),
  },

  checkboxContainer: {
    display: "flex",
    flexDirection: "column",
    border: "2px solid",
    borderColor: baseTheme.palette.primary.dark,
    borderRadius: "24px",
    maxHeight: "45vh",
    maxWidth: { xs: "80vw", lg: "12vw" },
    backgroundColor: baseTheme.palette.secondary.light,
    padding: baseTheme.spacing(5),
  },
};
