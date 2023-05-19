import { baseTheme } from "@/components/constants";

export const styles = {
  textHeader: {
    textAlign: "left",
    width: "100%",
    color: baseTheme.palette.primary.main,
  },

  textBody: {
    textAlign: "left",
    width: "100%",
    paddingTop: baseTheme.spacing(3),
    paddingBottom: baseTheme.spacing(7),
  },

  sparePartsBlock: {
    display: "flex",
    flexFlow: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
  },

  sparePart: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "20%",
    maxWidth: "45%",
    textAlign: "center",
    padding: baseTheme.spacing(5),
    marginY: baseTheme.spacing(5),
  },
};
