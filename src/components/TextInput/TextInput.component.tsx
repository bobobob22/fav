import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import OutlinedInput, { OutlinedInputProps } from "@mui/material/OutlinedInput";

import {
  FieldError,
} from "react-hook-form";


type TextInputProps = Partial<Omit<OutlinedInputProps, "error">> & {
  title?: string;
  error?: FieldError;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TextInput = ({
  title,
  value,
  onChange,
  error,
  ...inputProps
}: TextInputProps) => (
  <Box sx={{ width: "100%" }}>
    <Typography variant="subtitle1" sx={{ mb: 0 }}>
      {title}
    </Typography>
    <OutlinedInput
      error={!!error}
      fullWidth
      value={value}
      onChange={onChange}
      {...inputProps}
    />
    {error && <p>{error.message}</p>}
  </Box>
);
