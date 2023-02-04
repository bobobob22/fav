import { styled } from "@mui/material";


export const AlbumWrapper = styled('ul')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: '1rem',
	borderRadius: '1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginRight: '1rem',
  marginBottom: '1rem',
}));

export const AlbumName = styled("h2")`
  margin: 0;
`;

export const AlbumArtist = styled("p")`
  font-size: 1rem;
  margin: 0;
`;

export const AlbumDate = styled("p")`
  font-size: 0.9rem;
  font-style: italic;
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

export const IconsWrapper = styled("div")`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const IconWrapper = styled("div")`
  cursor: pointer;
  padding: 1rem;
`;

