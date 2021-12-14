import React from "react";
import { Box, Flex, Grid ,Card } from "../../atoms";
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
                            <Profile name="John Snow" designation="CTO"></Profile>
                        </Box>
                    </Card>

                    <Card>
                        <img src={Img} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                           <Profile name="John Snow" designation="CTO"></Profile>
                        </Box>
                    </Card>

                    <Card>
                    <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                    <Box>
                        <Profile name="Erza Scarlets" designation="CEO"></Profile>
                    </Box>
                    </Card>

                    <Card>
                        <img src={Img} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                            <Profile name="John Snow" designation="CTO"></Profile>
                        </Box>
                    </Card>
                    <Card>
                    <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                    <Box>
                        
                        <Profile name="Erza Scarlets" designation="CEO"></Profile>
                        </Box>
                    </Card>
                    <Card>
                    <img src={Img} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                            <Profile name="John Snow" designation="CTO"></Profile>
                        </Box>
                    </Card>
                    <Card>
                        <img src={Img} alt="" width = "100%"  border-radius="5px"/>
                            <Box>
                                <Profile name="John Snow" designation="CTO"></Profile>
                            </Box>
                        </Card>
                    <Card >
                        <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                            <Box>
                                <Profile name="Erza Scarlets" designation="CEO"></Profile>
                            </Box>
                        </Card>
            </Grid>





            

            <Flex  pl ="65px" pt="40px" flexDirection="row" flexWrap="wrap"  alignItems="center" bg="primary.5">
                <Box width="30%" p="18px" py="20px">
                    <Card >
                        <img src={Img} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                            <Profile name="John Snow" designation="CTO"></Profile>
                        </Box>
                    </Card>
                </Box>
                <Box width="30%" p="30px" py="20px">
                    <Card >
                        <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                            <Profile name="Erza Scarlets" designation="CEO"></Profile>
                        </Box>
                    </Card>

                </Box>
                <Box width="30%" p="13px" py="20px">
                    <Card >
                        <img src={Img} alt="" width = "100%"  border-radius="5px"/>
                            <Box>
                                <Profile name="John Snow" designation="CTO"></Profile>
                            </Box>
                    </Card>

                </Box>
                <Box width="30%" p="19px" py="20px">
                    <Card >
                        <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                            <Profile name="Erza Scarlets" designation="CEO"></Profile>
                        </Box>
                    </Card>
                </Box>
                <Box width="30%" p="25px" py="20px">
                    <Card >
                        <img src={Img} alt="" width = "100%"  border-radius="5px"/>
                            <Box>
                                <Profile name="John Snow" designation="CTO"></Profile>
                            </Box>
                    </Card>

                </Box>
                <Box width="30%" p="20px" py="20px">
                    <Card >
                        <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                            <Profile name="Erza Scarlets" designation="CEO"></Profile>
                        </Box>
                    </Card>

                </Box>
                <Box width="30%" p="150px" py="20px">
                    <Card >
                        <img src={Img} alt="" width = "100%"  border-radius="5px"/>
                            <Box>
                                <Profile name="John Snow" designation="CTO"></Profile>
                            </Box>
                    </Card>

                </Box>
                <Box width="30%" p="50px" py="20px">
                    <Card >
                        <img src={Img2} alt="" width = "100%"  border-radius="5px"/>
                        <Box>
                            <Profile name="Erza Scarlets" designation="CEO"></Profile>
                        </Box>
                    </Card>

                </Box>

            </Flex>






        </>
    );
};