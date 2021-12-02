import React from "react";
import styled from "styled-components";

const Text = styled.div`
  font-size: 30px;
`;
export const Title = ({ designation }) => {
  return <Text p="2rem">{designation}</Text>;
};
