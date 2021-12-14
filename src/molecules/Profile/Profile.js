import React from "react";
import { Box, Card, Heading, Title } from "../../atoms";
import { Header } from "../Header/Header";


export const Profile = ({ name, designation }) => {
  return (
    <Box p="2px 16px">
      <Heading  name={name}  />
      

      <Title designation={designation}/>

    </Box>
  );
};
export default Profile;
