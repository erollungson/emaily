import React from "react";
import { CssBaseline, Typography, Container } from "@material-ui/core";
import HorizontalGap from "../utils/horizontal-gap";

const Landing = () => {


  return (
    <>
      <CssBaseline />
      <Container>
        <HorizontalGap size={"100px"}/>
        <Typography variant="h1" align="center">
          Email-it
        </Typography>
        <Typography variant="subtitle1" align="center">
          Collect some Feedback from your users!
        </Typography>
      </Container>
    </>
  );
};

export default Landing;
