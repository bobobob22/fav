import styled from "@emotion/styled";

export const MainButtonsWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

export const Form = styled("form")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(4),
  borderRadius: "1rem",
  display: "flex",
  flexDirection: "column",
  margin: "1rem"
}));

export const ReorderIconWrapper = styled("div")`
  padding: 1rem;
  cursor: pointer;
  display: flex;
`;

export const ChangeOrderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledSelect = styled.select`
  display: inline-block;
  padding: 0.5em 2em 0.5em 0.5em;
  border: 1px solid #eee;
  appearance: none;
  cursor: pointer;
  background-repeat: no-repeat;
  background-image: linear-gradient(45deg, transparent 50%, currentColor 50%),
    linear-gradient(135deg, currentColor 50%, transparent 50%);
  background-position: right 15px top 22px, right 10px top 22px;
  background-size: 5px 5px, 5px 5px;
`;
