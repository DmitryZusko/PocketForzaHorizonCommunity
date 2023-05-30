import { baseTheme } from "@/components";

export const styles = {
  defaultButton: {
    m: baseTheme.spacing(5),
    border: "1px solid",
    borderColor: baseTheme.palette.secondary.light,
    maxWidth: "undefined",
  },

  nestedButton: { m: baseTheme.spacing(2), border: "1px solid #eee", maxWidth: "120px" },
};
