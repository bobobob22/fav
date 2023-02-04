import createPalette from "@mui/material/styles/createPalette";

export const colors = {
  primary: "#c2c2c2",
  secondary: "#afe123",
  borderGrey: "rgba(255, 255, 255, 0.2)",
  borderGreyDark: "rgba(255, 255, 255, 0.1)",
  darkBlue: "#2C2F3B"
};

export const getPalette = () =>
  createPalette({
    mode: "light",
    primary: {
      main: colors.primary
    },
    secondary: {
      main: colors.secondary
    },
    success: {
      main: "#db0f27"
    },
    error: {
      main: "#DB5930"
    },
    borderGrey: {
      main: "#f0f0f4"
    },
    warning: {
      main: "#FFC34A"
    },
    text: {
      primary: "#2A3755",
      secondary: "#545778"
    }
  });
