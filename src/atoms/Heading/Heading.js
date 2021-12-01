import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: tomato;
  padding: 20px;
`;
const Text = styled.div`
  color: red;
  font-size: 30px;
`;
export const Heading = () => {
  return (
    <Wrapper>
      <Text>Welcome</Text>;
    </Wrapper>
  );
};
