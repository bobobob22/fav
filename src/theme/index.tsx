import { ReactNode } from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

import { ThemeProvider } from "@emotion/react";

import CssBaseline from "@mui/material/CssBaseline";

import { getPalette } from "./theme.palette";
import { getTypography } from "./theme.typography";
import { getComponents } from "./theme.components";

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    borderGrey: Palette["primary"];
  }
  interface PaletteOptions {
    borderGrey: PaletteOptions["primary"];
  }
}

const palette = getPalette();
const typography = getTypography(palette);
const components = getComponents(palette);

export const muiTheme = responsiveFontSizes(
  createTheme({
    palette,
    components,
    typography,
  })
);

export const Theme = ({ children }: { children: ReactNode }) => (
  <MuiThemeProvider theme={muiTheme}>
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </MuiThemeProvider>
);
