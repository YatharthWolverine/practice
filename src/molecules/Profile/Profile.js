import React from "react";
import { Card, Heading, Title } from "../../atoms";

export const Profile = ({ name, designation }) => {
  return (
    <Card>
      <Heading name={name} />
      <Title designation={designation} />
    </Card>
  );
};
