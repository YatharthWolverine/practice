import React from "react";
import { Box, Flex, Heading, Title , Grid ,Card } from "../../atoms";
import { Profile } from "../Profile";
import Img from "../../assets/img.png";
import Img2 from "../../assets/img2.png";

export const Header = () => {
  return (
    <Flex mx="50px" mt="10px" justifyContent="space-between" bg="primary.3">
     <Card>
       <img src={Img} alt="" width = "100%"  border-radius="5px"/>
       <Box>
         <h2>
           <Profile name="Flower"></Profile>
         </h2> 
         <p>
         <Profile designation="Rose"></Profile>
         </p>
         </Box>
      </Card>
      <Box m={[40,50,60]} p={[40,50,60]} width={[1]} alignItems="right">
        <h1>Just for Content!</h1>
        <text text-align="right">
        This is the Card for the respective designation Flowers.A rose is a woody perennial flowering plant of the genus Rosa,
         in the family Rosaceae, or the flower it bears. There are over three hundred species and tens of thousands of cultivars.
         citation needed] They form a group of plants that can be erect shrubs, climbing, or trailing, with stems that are often armed
          with sharp prickles. Their flowers vary in size and shape and are usually large and showy, in colours ranging 
          from white through yellows and reds. Most species are native to Asia, with smaller numbers native to Europe, North America,
           and northwestern Africa.[citation needed] Species, cultivars and hybrids are all widely grown for their beauty and often are
            fragrant. Roses have acquired cultural significance in many societies. Rose plants range in size from compact, miniature roses,
             to climbers that can reach seven meters in height. Different species hybridize easily, and this has been used
              in the development of the wide range of garden roses.
        </text>
        </Box>
      <Card bg="pink"   > 
       <img src={Img2} alt="" width = "100%" />
       <Box>
         <h2>
           <Profile name="Flower"></Profile>
         </h2> 
         <p>
         <Profile designation="Lily"></Profile>
         </p>
         </Box>
      </Card>

    </Flex>
  );
};
