import { baseTheme } from "../constants";

export const styles = {
  gridItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: baseTheme.spacing(7),
  },

  guidesContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: baseTheme.spacing(10),
  },
};
