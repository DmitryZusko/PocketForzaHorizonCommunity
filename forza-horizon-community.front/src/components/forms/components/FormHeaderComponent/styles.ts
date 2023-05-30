import { baseTheme } from "@/components/constants";

export const styles = {
  outerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: baseTheme.spacing(17),
    position: "relative",
  },

  imageContainer: {
    position: "absolute",
    left: baseTheme.spacing(7),
  },
};
