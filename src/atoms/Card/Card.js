import React from "react";
import { Box } from "../Box";

export const Card = ({ children, borderRadius, m }) => {
  return (
    <Box
      bg="white"
      boxShadow="0px 10px 20px rgba(18, 38, 63, 0.0313726)"
      p="20px"
      borderRadius={borderRadius}
      m={m}
    >
      {children}
    </Box>
  );
};
