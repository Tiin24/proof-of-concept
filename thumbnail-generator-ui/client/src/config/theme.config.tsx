import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";

type themeProps = {
  children: JSX.Element;
};

export enum themePalette {
  BG = "#fafaff",
  FONT_GLOBAL = "Poppins",
  LIME = "#2cd31d",
}

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: themePalette.BG,
    },
    primary: {
      main: themePalette.LIME,
    },
  },
  typography: {
    fontFamily: themePalette.FONT_GLOBAL,
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: "none",
          fontSize: "1rem",
          border: "3px solid",
          borderRadius: "7px",
          color: "black",
          backgroundColor: "#fffff",
          boxShadow: "rgb(0 0 0) 6px 3px 1px",
          paddingBottom: "8px 16px",
          gap: "10px",
        },
      },
    },
  },
});

export const ThemeConfig: React.FC<themeProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
