import React from "react";
import { Box, Flex, Heading, Title , Grid ,Card } from "../../atoms";
import { Profile } from "../Profile";
import Img from "../../assets/img.png";
import Img2 from "../../assets/img2.png";

export const Output = () => {
    return (
        <>
        
            <Grid gridGap={80} gridTemplateColumns="auto auto auto"   p="40px" mx="40px" bg="primary.3">

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

            <Flex  justifyContent="center" p="40px"  bg="primary.5" mx="40px" flexWrap = "wrap">
                <Grid gridTemplateColumns="350px 350px" gridGap={100} >
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
                </Grid>
                
            </Flex>
        </>
    );
};