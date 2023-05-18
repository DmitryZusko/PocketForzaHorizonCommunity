import { baseTheme } from "@/components/constants";

export const styles = {
  sparePartsBlock: {
    display: "flex",
    flexFlow: "wrap",
    justifyContent: "space-evenly",
  },
  divider: {
    color: baseTheme.palette.primary.main,
    "&.MuiDivider-root::before, &.MuiDivider-root::after": { borderTop: "2px solid" },
  },
  textHeader: {
    textAlign: "left",
    width: "100%",
    color: baseTheme.palette.primary.main,
  },
};
