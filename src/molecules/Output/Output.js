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
                        <img src={Img} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                            <Profile name="Shubham Saurabh" designation="CEO"></Profile>
                        </Box>
                    </Card>

                    <Card>
                        <img src={Img} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                           <Profile name="Tarun" designation="Front-End"></Profile>
                        </Box>
                    </Card>

                    <Card>
                    <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                    <Box>
                        <Profile name="Nidhi Sah" designation="Front-End"></Profile>
                    </Box>
                    </Card>

                    <Card>
                        <img src={Img} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                            <Profile name="Saurab" designation="Full Stack"></Profile>
                        </Box>
                    </Card>
                    <Card>
                    <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                    <Box>
                        
                        <Profile name="Dipanshu" designation="COO"></Profile>
                        </Box>
                    </Card>
                    <Card>
                    <img src={Img} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                            <Profile name="Lokesh" designation="COO"></Profile>
                        </Box>
                    </Card>
                    <Card>
                        <img src={Img} alt="" width = "100%"  border-radius="5px"/>
                            <Box>
                                <Profile name="Mayank" designation="COO"></Profile>
                            </Box>
                        </Card>
                    <Card >
                        <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                            <Box>
                                <Profile name="abc" designation="CEO"></Profile>
                            </Box>
                        </Card>
            </Grid>





            

            <Flex  pl ="65px" pt="40px" flexDirection="row" flexWrap="wrap"  bg="primary.5">
                <Box width="30%" p="15px" py="20px">
                    <Card >
                        <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                            <Profile name="NITIN" designation="CEO"></Profile>
                        </Box>
                    </Card>
                </Box>
                <Box width="30%" p="15px" py="20px">
                    <Card >
                        <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                            <Profile name="Nikita" designation="Front-End"></Profile>
                        </Box>
                    </Card>

                </Box>
                <Box width="30%" p="15px" py="20px">
                    <Card >
                        <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                            <Profile name="XYZ" designation="CEO"></Profile>
                        </Box>
                    </Card>

                </Box>
                <Box width="30%" p="15px" py="20px">
                    <Card >
                        <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                            <Profile name="ABCD" designation="CEO"></Profile>
                        </Box>
                    </Card>
                </Box>
                <Box width="30%" p="15px" py="20px">
                    <Card >
                        <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                            <Profile name="Nidhi" designation="CEO"></Profile>
                        </Box>
                    </Card>

                </Box>
                <Box width="30%" p="15px" py="20px">
                    <Card >
                        <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                            <Profile name="NIIIIII" designation="CEO"></Profile>
                        </Box>
                    </Card>

                </Box>
                <Box width="30%" pl="200px" py="20px">
                    <Card >
                        <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                            <Profile name="nnnnnnn" designation="CEO"></Profile>
                        </Box>
                    </Card>

                </Box>
                <Box width="30%" p="80px" py="20px">
                    <Card >
                        <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                            <Profile name="Tarun" designation="Front-End"></Profile>
                        </Box>
                    </Card>

                </Box>

            </Flex>






        </>
    );
};