import React from "react";
import { Box, Flex, Heading, Title, Grid, Card, Mainheading, Mainheading2, Mainheading3 } from "../../atoms";
import { Profile } from "../Profile";
import Img from "../../assets/img.png";
import { backgroundColor } from "styled-system";
import styled from "styled-components";

const GridStyle= styled(Grid)`
.gradient-primary {
    background: Linear-gradient(90deg,#fe3265 40% , #ffc774);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    width: fit-content;

}
.logo{
    height:100%;
    object-fit:scale-down;
}

`;



export const Output = () => {
    return (
        
            <GridStyle
              gridTemplateColumns="auto auto"
                backgroundImage="Linear-gradient(120.23deg, rgb(237,247,255) -0.68% rgba(226, 243, 255, 0.13) 101.91% "
                p="5rem 8rem"
            >
                <Box>
                    <Box classname="gradient-primary">Awards & Recognition</Box>
                    <Heading name="This is how we have ben recognised in the industry " />
                </Box>
                <Box>
                    <Grid gridColumnGap="40px" gridTemplateColumns="auto auto">
                    
                        <Grid gridTemplateColumns="auto auto" alignItems="center" gridGap="40px">
                            <Card>
                                <Box position="absolute" right="-15px"top="45px" height="30px" width="30px" borderRadius="20px" backgroundImage="linear-gradient( 93.7deg, rgb (30,117,249) 0%, rgb(102, 41, 163) 103.04%)"/>
                                <Grid placeItems="center" height="50px" width="100px" p="15px 30px">
                                <img src={Img} alt="Techsparx"classname="Logo" />
                                </Grid>
                            </Card>
                            
                        
                    
                            <Box>
                                <Heading name="Techsparx Case Study" />
                                <Mainheading2>We got featured on Techsparx for one of their case history</Mainheading2>
                            </Box>
                        </Grid>
                    </Grid>
                
                </Box>
        
            </GridStyle>
    );
};






















