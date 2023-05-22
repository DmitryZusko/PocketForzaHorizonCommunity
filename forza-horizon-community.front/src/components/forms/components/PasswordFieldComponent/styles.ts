import { baseTheme } from "@/components/constants";

export const styles = {
  outerContainer: {
    marginY: baseTheme.spacing(3),
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: { paddingBottom: "0" },
  helperTextForm: { mb: baseTheme.spacing(3), color: baseTheme.palette.error.main },
};
