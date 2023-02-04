import MuiButton from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

import { ButtonProps as MuiButtonProps } from "@mui/material/Button";

type ButtonProps = MuiButtonProps & {
  isLoading?: boolean;
};

export const Button = ({
  color,
  disabled,
  children,
  isLoading = false,
  ...buttonProps
}: ButtonProps) => {
  return (
    <MuiButton disabled={disabled || isLoading} color={color} {...buttonProps}>
      {isLoading && (
        <CircularProgress
          size={25}
          thickness={4}
          sx={{ mr: 1, color: "white" }}
        />
      )}
      {!isLoading && children}
    </MuiButton>
  );
};
