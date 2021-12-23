import React from "react";
import { Box, Card, Grid, Heading, Title } from "../../atoms";

export const Profile = ({ data }) => {
  return (
    <Box>
      <Grid gridAutoFlow="column" justifyContent="space-between" gridGap="3rem" alignItems="center">
        {data.map((obj) => {
          return (
            <Card key={obj.id} borderRadius="40px" m="50px">
              <Grid
                gridAutoFlow={{ xs: "row", lg: "column" }}
                justifyContent="space-between"
                gridGap="3rem"
                alignItems="center"
              >
                <Heading name={obj.name} />
                <Title designation={obj.value} />
              </Grid>
              <Grid
                gridAutoFlow="column"
                justifyContent="space-between"
                gridGap="3rem"
                alignItems="center"
              >
                <Heading name={obj.secondName} />
                <Title designation={obj.value} />
              </Grid>
            </Card>
          );
        })}
      </Grid>
      <Card m="30px">
        <Grid
          gridAutoFlow={{ xs: "row", lg: "column" }}
          justifyContent="space-between"
          gridGap="3rem"
          alignItems="center"
        >
          <Heading name="sdcjhsdjhc" />
          <Title designation="sdkcdsk" />
        </Grid>
      </Card>
    </Box>
  );
};
