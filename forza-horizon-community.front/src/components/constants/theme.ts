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
    blockTitle: {
      fontSize: "2rem",
      fontFamily: ["Anuphan", "sans-serif"].join(","),
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
    blockTitle: React.CSSProperties;
    textTitle: React.CSSProperties;
    textBody: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    imageHeader?: React.CSSProperties;
    imageBody?: React.CSSProperties;
    blockTitle?: React.CSSProperties;
    textTitle?: React.CSSProperties;
    textBody?: React.CSSProperties;
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
  }
}
