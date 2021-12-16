import React from "react";
import styled from "styled-components";
import { Box, Card, Grid, Heading, Title } from "../../atoms";
import Startup from "../../assets/startup.png";



const GridStyle = styled(Grid)`
 .gradient-primary{
   background: linear-gradient(90deg, #fe3265 40%, #ffc774);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
    width: fit-content;
 },

 `;


export const Output = () => {
    return (
        <GridStyle
            gridTemplateColumns="1fr 1fr 1fr"
            backgroundImage="linear-gradient(
          120.23deg, rgb(237,247,255)-0.68%,rgba(226,243,255,0.13)101.91%)"
            p="6rem 8rem "
        >

            <Box>

                <Box className="gradient-primary">AWARDS & RECOGNITIONS</Box>
                <Heading name="This is how we have been recognised in the industry" />
            </Box>


            <Box>
                <Grid gridRowGap="20px">
                    {[0, 1, 2].map((index) => (
                        <Grid key={index} gridTemplateColumns="1fr 1fr" alignItems="center" gridGap="40px">

                            <Card  borderRadius="20px">
                                <Box
                                    position="absolute"
                                    right="-15px"
                                    top="70px"
                                    height="40px"
                                    width="40px"
                                    borderRadius="20px"
                                    backgroundImage="linear-gradient(
                        93.74deg, rgb(30, 117, 249) 0%, rgb(102, 41, 163) 103.04%)"/>
                                <Box height="80px" p="30px 30px">
                                    <img src={Startup} alt="Startup" className="logo" />




                                </Box>
                            </Card>

                        </Grid>


                    ))}
                </Grid>





            </Box>
            <Box>
                <Grid gridGap="80px">
                    {[0, 1, 2].map((index) => (
                        <Grid key={index} gridTemplateColumns="1fr " alignItems="center" gridGap="30px">

                            <Heading name="Startup India Case Study" />
                            <Title designation="We got Featured on Startup for their Case-Study" />
                        </Grid>
                    ))}
                </Grid>
            </Box>

        </GridStyle>
    );
};