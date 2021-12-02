import React from "react";
import { Box } from "../Box";

export const Card = ({ children }) => {
  return (
    <Box bg="white" boxShadow="10px 0px 10px #ddd" p="20px">
      {children}
    </Box>
  );
};
