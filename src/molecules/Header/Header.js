import React from "react";
import { Box, Flex, Heading, Title , Grid ,Card } from "../../atoms";
import { Profile } from "../Profile";
import Img from "../../assets/img.png";
import Img2 from "../../assets/img2.png";

export const Header = () => {
  return (
    <Flex mx="50px"  justifyContent="space-between" bg="primary.3">
     <Card>
       <img src={Img} alt="" width = "100%"  border-radius="5px"/>
       <Box>
         <h2>
           <Profile name="Saurav"></Profile>
         </h2> 
         <p>
         <Profile designation="CTO"></Profile>
         </p>
         </Box>
      </Card>
      <Box m={[ 0, 1, 2 ]}  p={[ 2, 3, 4 ]}  width={[1]}>
        <h1>Just for Content!</h1>
        <text>
        This is the Card for the respective desination of the post holders.React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.
        Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called “components” that contain both. We will come back to components in a further section, but if you’re 
        not yet comfortable putting markup in JS, this talk might convince you otherwise.React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.
        </text>
        </Box>
      <Card bg="red"> 
       <img src={Img2} alt="" width = "100%" border-radius="5px"/>
       <Box>
         <h2>
           <Profile name="Shreya"></Profile>
         </h2> 
         <p>
         <Profile designation="CPO"></Profile>
         </p>
         </Box>
      </Card>

    </Flex>
  );
};
