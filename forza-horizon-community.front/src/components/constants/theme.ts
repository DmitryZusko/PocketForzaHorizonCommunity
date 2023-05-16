import { createTheme } from "@mui/material/styles";

export const baseTheme = createTheme({
  palette: {
    primary: {
      light: "#ed4384",
      main: "#da206a",
      dark: "#ae1b60",
    },
    secondary: {
      light: "#f7f7f7",
      main: "#ccc",
      dark: "#707070",
    },
  },

  typography: {
    fontFamily: ["Anuphan", "sans-serif"].join(","),
    fontSize: "1.5rem",
    imageHeader: {
      fontSize: "2rem",
      color: "#ed4384",
      fontWeight: 700,
      "@media (min-width:900px)": {
        fontSize: "4rem",
      },
    },
    imageBody: {
      fontSize: "1.5rem",
      color: "#da206a",
      fontWeight: 700,
      "@media (min-width:900px)": {
        fontSize: "2rem",
      },
    },
    blockTitle: {
      fontSize: "2rem",
      fontWeight: "700",
      "@media (min-width:900px)": {
        fontSize: "2.5rem",
      },
    },
    textTitle: {
      fontSize: "1.5rem",
      fontFamily: ["Urbanist", "sans-serif"].join(","),
      fontWeight: "600",
      "@media (min-width:900px)": {
        fontSize: "2rem",
      },
    },
    textBody: {
      fontSize: "1.2rem",
      fontFamily: ["Urbanist", "sans-serif"].join(","),
      fontWeight: "400",
      "@media (min-width:900px)": {
        fontSize: "1.4rem",
      },
    },
    tooltip: {
      fontSize: "1.2rem",
      fontFamily: ["Urbanist", "sans-serif"].join(","),
      fontWeight: "400",
      "@media (min-width:900px)": {
        fontSize: "1rem",
      },
    },
    smallText: {
      fontSize: ".85rem",
      fontFamily: ["Urbanist", "sans-serif"].join(","),
      fontWeight: "200",
    },
    smallBoldText: {
      fontSize: ".85rem",
      fontFamily: ["Urbanist", "sans-serif"].join(","),
      fontWeight: "bold",
    },
  },

  spacing: 2,

  components: {
    MuiGrid: {
      defaultProps: {
        spacing: 5,
      },
    },
  },
});

export const lightTheme = createTheme(baseTheme, {});

export const darkTheme = createTheme(baseTheme, {});

declare module "@mui/material/styles" {
  interface TypographyVariants {
    imageHeader: React.CSSProperties;
    imageBody: React.CSSProperties;
    blockTitle: React.CSSProperties;
    textTitle: React.CSSProperties;
    textBody: React.CSSProperties;
    tooltip: React.CSSProperties;
    smallText: React.CSSProperties;
    smallBoldText: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    imageHeader?: React.CSSProperties;
    imageBody?: React.CSSProperties;
    blockTitle?: React.CSSProperties;
    textTitle?: React.CSSProperties;
    textBody?: React.CSSProperties;
    tooltip?: React.CSSProperties;
    smallText?: React.CSSProperties;
    smallBoldText?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    imageHeader: true;
    imageBody: true;
    blockTitle: true;
    textTitle: true;
    textBody: true;
    tooltip: true;
    smallText: true;
    smallBoldText: true;
  }
}
