import styled from "@emotion/styled";

export const Form = styled("form")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(2),
  borderRadius: "1rem",
  display: "flex",
  flexDirection: "column",
  marginBottom: "1rem"
}));

export const StyledInput = styled("input")(({ theme }) => ({
  backgroundColor: "#fff",
  padding: theme.spacing(1),
  borderRadius: "0.2rem",
  border: `1px solid ${theme.palette.borderGrey.main}`,
  boxShadow: "unset",
  marginBottom: "0.3rem"
}));

export const ErrorMsg = styled("p")(({ theme }) => ({
  color: theme.palette.error.main
}));

export const ChangeOrderWrapper = styled.div`
	display: flex;
	align-items: center;
`;
