import { baseTheme } from "@/components/constants";

export const styles = {
  outerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginY: baseTheme.spacing(4),
    position: "relative",
  },
  primaryBox: {
    backgroundColor: baseTheme.palette.primary.light,
    opacity: "20%",
    color: "black",
    top: "0",
  },
  secondaryBox: {
    backgroundColor: baseTheme.palette.secondary.light,
    opacity: "20%",
    color: "black",
    top: "0",
  },

  text: { margin: baseTheme.spacing(2) },
};
