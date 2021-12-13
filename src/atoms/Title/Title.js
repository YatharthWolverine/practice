import React from "react";
import styled from "styled-components";

const Text = styled.p`
  font-size: 20px;
`;
export const Title = ({ designation }) => {
  return <Text p="2rem">{designation}</Text>;
};
