import { baseTheme } from "@/components/constants";

export const styles = {
  outerContainer: { display: "flex", justifyContent: "space-around", flexWrap: "wrap" },

  blockTitle: {
    mt: baseTheme.spacing(35),
    mb: baseTheme.spacing(25),
    width: "100%",
  },

  achievementBox: { my: baseTheme.spacing(10), mx: baseTheme.spacing(3), maxWidth: "45%" },
};
