import { baseTheme } from "@/components/constants";

export const styles = {
  outerBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  headerText: {
    m: baseTheme.spacing(10),
  },

  cardBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    overflowX: { xs: "scroll", lg: "none" },
  },

  tooltip: {
    minWidth: { xs: "90vw", md: "55vw", lg: "32vw" },
  },
};
