import styled from "styled-components";
import { Box } from "../Box";
import {
  color,
  layout,
  grid,
  space,
  position,
  background,
  border,
  shadow,
  typography,
  flexbox,
} from "styled-system";

export const Grid = styled(Box)`
  display: grid;
  ${space}
  ${color}
  ${layout}
  ${background}
  ${position}
  ${grid}
  ${border}
  ${typography}
  ${flexbox}
  ${shadow}

`;
