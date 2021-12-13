import React from "react";
import styled from "styled-components";

const Text = styled.h2`
  font-size: 30px;
`;
export const Heading = ({ name }) => {
  return <Text>{name}</Text>;
};
