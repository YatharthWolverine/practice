import React from "react";
import styled from "styled-components";

const Text = styled.div`
  font-size: 20px;
  color: #555;
`;
export const Title = ({ designation }) => {
  return <Text p="2rem">{designation}</Text>;
};
export default Title;
