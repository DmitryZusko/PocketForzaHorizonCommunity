import { baseTheme } from "@/components/constants";

export const styles = {
  sortLabel: {
    "& .MuiTableSortLabel-icon": {
      color: baseTheme.palette.primary.light,
    },
    "&.Mui-active": {
      "& .MuiTableSortLabel-icon": {
        color: baseTheme.palette.primary.dark,
      },
    },
  },

  sortLabelText: { color: baseTheme.palette.primary.main },
};
