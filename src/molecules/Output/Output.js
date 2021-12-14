import React from "react";
import { Box, Flex, Heading, Title , Grid ,Card } from "../../atoms";
import { Profile } from "../Profile";
import Img from "../../assets/img.png";
import { backgroundColor } from "styled-system";



export const Output = () => {
    return (
        <>
        <Grid>
            <Grid gridTemplateColumns="auto"  >
             <Title>AWARDS & RECOGNITIONS</Title>

             
             <p>This is how we have been recognized in the industry</p>
            </Grid>
        <Grid   gridTemplateColumns="auto" gridGap={50}   pl="100vh"   align-items="right" marginTop="20px">
                <Card width="100px">

                    <Box pl="100px"pr="50px"pt="50px"pb="50px" bg="rgb(237 244 248)"borderRadius="20px">
                        <img src={Img} width="100px" height="50px"border-radius="5px" align="center"/>
                        
                    </Box>
                </Card>
                <Card>

                    <Box pl="100px"pr="50px"pt="45px"pb="50px" bg="rgb(237 244 248)"borderRadius="20px" >
                        <img src={Img} width="100px"height="50px" border-radius="5px" align="center"/>
                    </Box>
                </Card>
                <Card>

                    <Box pl="100px"pr="50px"pt="45px"pb="50px" bg="rgb(237 244 248)"borderRadius="20px">
                        <img src={Img} width="100px"height="50px" border-radius="5px" align="center"/>
                    </Box>
                </Card>

            

                    

                    

                    
            </Grid>
        </Grid>
            





            

            





        </>
    );
};