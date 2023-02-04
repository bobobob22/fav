import { Palette } from "@mui/material/styles";
import createTypography from "@mui/material/styles/createTypography";

export const getTypography = (palette: Palette) =>
  createTypography(palette, {
    fontFamily: ["Roboto", "Montserrat"].join(","),
    fontSize: 12,
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600,
      textAlign: "center"
    },
    h2: {
      fontSize: "2.2rem"
    },
    h3: {
      fontSize: "2rem"
    },
    h4: {
      fontSize: "1.8rem"
    },
    h5: {
      fontSize: "1.4rem"
    },
    h6: {
      fontSize: "1.2rem"
    },
    subtitle1: {
      fontWeight: 600
    },
    subtitle2: { fontSize: "1rem" },
    button: {
      fontSize: "1.1rem",
      fontWeight: "normal"
    }
  });
