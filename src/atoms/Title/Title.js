import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: yellow;
  padding: 20px;
`;
const Text = styled.div`
  color: red;
  font-size: 30px;
`;
export const Title = () => {
  return (
    <Wrapper>
      <Text>Title</Text>;
    </Wrapper>
  );
};
