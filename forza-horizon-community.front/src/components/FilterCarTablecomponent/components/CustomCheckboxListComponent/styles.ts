import { baseTheme } from "@/components/constants";

export const styles = {
  outerContainer: {
    display: "flex",
    flexFlow: "column",
    alignItems: "self-start",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: baseTheme.spacing(3),
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: baseTheme.palette.secondary.main,
      borderRadius: 50,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: baseTheme.palette.primary.dark,
      borderRadius: 50,
    },
  },

  lable: { p: baseTheme.spacing(5), py: baseTheme.spacing(5) },
};
