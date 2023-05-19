import { baseTheme } from "../constants";

export const styles = {
  outerContainer: {
    marginTop: baseTheme.spacing(30),
    paddingX: baseTheme.spacing(10),
    paddingBottom: baseTheme.spacing(10),
    paddingTop: baseTheme.spacing(20),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "column wrap",
    backgroundColor: baseTheme.palette.secondary.main,
    minHeight: "20vh",
    border: `2px solid ${baseTheme.palette.primary.light}`,
    borderTopLeftRadius: "10%",
    borderTopRightRadius: "10%",
    borderBottom: "none",
  },
};
