import React from "react";
import { Box, Flex, Heading, Title , Grid ,Card } from "../../atoms";
import { Profile } from "../Profile";
import Img from "../../assets/img.png";
import Img2 from "../../assets/img2.png";

export const Output = () => {
    return (
        <>
        
            <Grid gridGap={100} gridTemplateColumns="auto auto auto "   p="40px" mx="40px" justifyContent="center" bg="primary.3">
                    <Card bg="white">
                        <img src={Img} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                            <h2>
                            <Profile name="John Snow"></Profile>
                            </h2> 
                            <p>
                            <Profile designation="CTO"></Profile>
                            </p>
                            </Box>
                    </Card>

                <Card>
                    <img src={Img} alt="" width = "100%"  border-radius="5px"/>
                    <Box>
                        <h2>
                        <Profile name="John Snow"></Profile>
                        </h2> 
                        <p>
                        <Profile designation="CTO"></Profile>
                        </p>
                        </Box>
                </Card>

                <Card>
                <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                <Box>
                    <h2>
                    <Profile name="Erza Scarlet"></Profile>
                    </h2> 
                    <p>
                    <Profile designation="CEO"></Profile>
                    </p>
                    </Box>
                </Card>
                <Card>
                <img src={Img} alt="" width = "100%"  border-radius="5px"/>
                <Box>
                    <h2>
                    <Profile name="John Snow"></Profile>
                    </h2> 
                    <p>
                    <Profile designation="CTO"></Profile>
                    </p>
                    </Box>
                </Card>
                <Card>
                <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                <Box>
                    <h2>
                    <Profile name="Erza Scarlets"></Profile>
                    </h2> 
                    <p>
                    <Profile designation="CEO"></Profile>
                    </p>
                    </Box>
                </Card>
                <Card>
                  <img src={Img} alt="" width = "100%"  border-radius="5px"/>
                     <Box>
                        <h2>
                        <Profile name="John Snow"></Profile>
                        </h2> 
                        <p>
                        <Profile designation="CTO"></Profile>
                        </p>
                    </Box>
                </Card>
                

            </Grid>

            <Flex flexDirection ="row" alignItems="center" justifyContent="center" p="40px"  bg="primary.5" mx="40px">
                <Box width="35%" p="15px">
                    <Card>
                        <img src={Img} alt="" width = "100%"  border-radius="5px"/>
                            <Box>
                            <h2>
                                <Profile name="John Snow"></Profile>
                                </h2> 
                                <p>
                                <Profile designation="CTO"></Profile>
                                </p>
                            </Box>
                        </Card>

                </Box>
                <Box width="35%" p="15px" >
                    <Card >
                        <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                            <Box>
                            <h2>
                                <Profile name="Erza Scarlet"></Profile>
                                </h2> 
                                <p>
                                <Profile designation="CEO"></Profile>
                                </p>
                            </Box>
                        </Card>

                </Box>
                
            </Flex>
        </>
    );
};