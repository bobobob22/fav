import { alpha, Components, Palette, Theme } from "@mui/material/styles";



export const getComponents = (palette: Palette): Components<Theme> => ({
  MuiCssBaseline: {
    styleOverrides: `
    body {
      background-color: white;
    }
    *::-webkit-scrollbar {
      width: 8px;
      border-radius: 10px;
    }
    *::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
      background-color: #4f4f4f;
    }
    *::-webkit-scrollbar-track {
      border-radius: 10px;
      background: rgba(255,255,255,0.5);
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.6);
    }
    `,
  },
  MuiButton: {
    defaultProps: {
      variant: "contained",
    },
    styleOverrides: {
      root: {
        padding: "0.8rem 2rem",
        textTransform: "none",
        borderRadius: "10px",
        boxShadow: "none",
        background: palette.borderGrey.main,
      },
      containedSecondary: {
        ":disabled": {
          background: alpha(palette.secondary.main, 0.7),
          color: "white",
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: palette.borderGrey.main,
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: palette.secondary.main,
        },
      },
      input: {
        padding: "0.8rem",
      },
      notchedOutline: {
        borderRadius: "6px",
        borderWidth: "2px",
      },
    },
  },
  MuiContainer: {
    styleOverrides: {
      root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        boxShadow: "none",
        alignItems: "flex-start",
        padding: "1.4rem",
      },
    },
  },
});
