import styled from "@emotion/styled";
import { mq } from "../../theme/responsive";

export const ButtonsWrapper = styled.div`
  display: flex;
`;

export const Title = styled.div`
  font-size: 1rem;

  ${mq["md"]} {
    font-size: 2rem;
  }
`;
