import * as React from "react";
import { CssBaseline, Typography, Container } from "@material-ui/core";
import HorizontalGap from "../utils/horizontal-gap";

const Dashboard = () => {
  return (
    <>
      <Container maxWidth={false}>
        <HorizontalGap />
        <CssBaseline />

        <Typography> Dashboard</Typography>
      </Container>
    </>
  );
};

export default Dashboard;
