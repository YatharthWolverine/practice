import React from "react";
import { Box , Flex} from "../../atoms";


export const Card = ({ children }) => {
  return (
    <Box  bg="primary.4" boxShadow="0 4px 8px 0 rgba(0,0,0,0.2) " width="50vh" height="20vh" borderRadius="20px" >
      {children}
    </Box>
  

  );
};
 export default Card;

 

