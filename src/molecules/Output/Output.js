import React from "react";
import { Box, Flex, Heading, Title , Grid ,Card } from "../../atoms";
import { Profile } from "../Profile";
import Img from "../../assets/img.png";
import Img2 from "../../assets/img2.png";

export const Output = () => {
    return (
        <>
            <Grid   gridTemplateRows="auto" gridGap={80} gridTemplateColumns="1fr 1fr 1fr"  pl="80px"  bg="primary.3">

                    <Card>
                        <Box pd="10px" bg="pink">
                            <img src={Img} alt="" width = "100%"  border-radius="5px"/>
                            <Box>
                                <Profile name="Flower" designation="Rose"></Profile>
                            </Box>

                        </Box>
                        
                    </Card>

                    <Card>
                    <Box pd="10px" bg="yellow">
                        <img src={Img} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                           <Profile name="Flower" designation="Dahalia"></Profile>
                        </Box>
                    </Box>
                    </Card>

                    <Card>
                    <Box pd="20px" bg="light-grey">
                    <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                    <Box>
                        <Profile name="Flower" designation="Jasmine"></Profile>
                    </Box>
                    </Box>
                    </Card>

                    <Card>
                    <Box pd="10px" bg="pink">
                        <img src={Img} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                            <Profile name="Flower" designation="Lavender"></Profile>
                        </Box>
                    </Box>
                    </Card>
                    <Card>
                    
                    <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                    <Box>
                    <Box pd="100px" bg="yellow">   
                        <Profile name="Flower" designation="Lily"></Profile>
                        </Box>
                    </Box>
                    </Card>
                    <Card>
                    <Box pd="10px" bg="red">  
                    <img src={Img} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                            <Profile name="Flower" designation="Jasmine"></Profile>
                        </Box>
                    </Box>
                    </Card>
                      
                    <Card>
                        <Box pd="10px" bg="yellow">
                            <img src={Img} alt="" width = "100%"  border-radius="5px"/>
                            <Box>
                                <Profile name="Flower" designation="Rose"></Profile>
                                </Box>
                         </Box>
                        </Card>
                    <Card >
                        <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                            <Box>
                                <Profile name="Flower" designation="Simple flower"></Profile>
                            </Box>
                        </Card>
            </Grid>





            

            <Flex  pl ="65px" pt="40px" flexDirection="row" flexWrap="wrap"  bg="primary.5">
                <Box width="30%" p="15px" py="20px">
                    <Card >
                        <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                            <Profile name="Flower" designation="Simple"></Profile>
                        </Box>
                    </Card>
                </Box>
                <Box width="30%" p="15px" py="20px">
                    <Card >
                        <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                            <Profile name="Flower" designation="Dahalia"></Profile>
                        </Box>
                    </Card>

                </Box>
                <Box width="30%" p="15px" py="20px">
                    <Card >
                        <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                            <Profile name="Flower" designation="Lily"></Profile>
                        </Box>
                    </Card>

                </Box>
                <Box width="30%" p="15px" py="20px">
                    <Card >
                        <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                            <Profile name="Flower" designation="Dahalia"></Profile>
                        </Box>
                    </Card>
                </Box>
                <Box width="30%" p="15px" py="20px">
                    <Card >
                        <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                            <Profile name="Flower" designation="Rose"></Profile>
                        </Box>
                    </Card>

                </Box>
                <Box width="30%" p="15px" py="20px">
                    <Card >
                        <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                            <Profile name="Flower" designation="Lily"></Profile>
                        </Box>
                    </Card>

                </Box>
                <Box width="30%" pl="200px" py="20px">
                    <Card >
                        <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                            <Profile name="Flower" designation="Jasmine"></Profile>
                        </Box>
                    </Card>

                </Box>
                <Box width="30%" p="80px" py="20px">
                    <Card >
                        <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                            <Profile name="Flower" designation="Simple"></Profile>
                        </Box>
                    </Card>

                </Box>

            </Flex>






        </>
    );
};