import styled from "@emotion/styled";
import { ListOrder } from "../../containers/Album.types";

export const AlbumsWrapper = styled("li")<{ listOrder: ListOrder }>(
  ({ listOrder }) => `
display: flex;
flex-wrap: wrap;
flex-direction: column;

${[listOrder === ListOrder.grid && `flex-direction: row;`]}
`
);
