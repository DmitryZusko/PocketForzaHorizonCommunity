import { createTheme } from "@mui/material/styles";

export const baseTheme = createTheme({
  palette: {
    primary: {
      light: "#ed4384",
      main: "#da206a",
      dark: "#ae1b60",
    },
  },

  typography: {
    imageHeader: {
      fontSize: "2rem",
      color: "#ed4384",
      fontFamily: ["Anuphan", "sans-serif"].join(","),
      fontWeight: 700,
      "@media (min-width:900px)": {
        fontSize: "4rem",
      },
    },
    imageBody: {
      fontSize: "1.5rem",
      color: "#da206a",
      fontFamily: ["Anuphan", "sans-serif"].join(","),
      fontWeight: 700,
      "@media (min-width:900px)": {
        fontSize: "2rem",
      },
    },
  },

  spacing: 2,

  components: {
    MuiGrid: {
      defaultProps: {
        spacing: 2,
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
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    imageHeader?: React.CSSProperties;
    imageBody?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    imageHeader: true;
    imageBody: true;
  }
}
