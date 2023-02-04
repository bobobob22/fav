import styled from "@emotion/styled";

import { mq } from "../../theme/responsive";

export const AlbumWrapper = styled.div`
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1rem;
  margin-bottom: 1rem;
  background-color: ${(props) => props.theme.palette.primary.main};
  width: 100%;

  ${mq["md"]} {
    width: auto;
  }
`;

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
