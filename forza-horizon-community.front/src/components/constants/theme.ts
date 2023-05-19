import { createTheme } from "@mui/material/styles";

export const baseThemeOptions = {
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
    specificBackground: {
      main: "#f7f7f7",
    },
  },

  typography: {
    fontFamily: ["Anuphan", "sans-serif"].join(","),
    fontSize: 16,
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

  zIndex: {
    fab: 1020,
    speedDial: 1020,
    appBar: 1040,
  },

  components: {
    MuiGrid: {
      defaultProps: {
        spacing: 5,
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          color: "#da206a",
          "::before, ::after": {
            borderTop: "2px solid",
          },
        },
      },
    },
  },
};

export const darkThemeOptions = {
  palette: {
    mode: "dark",
    specificBackground: {
      main: "#707070",
    },
  },
};

export const baseTheme = createTheme(baseThemeOptions);

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

declare module "@mui/material/styles" {
  interface Palette {
    specificBackground: Palette["primary"];
  }

  interface PaletteOptions {
    specificBackground: PaletteOptions["primary"];
  }
}
