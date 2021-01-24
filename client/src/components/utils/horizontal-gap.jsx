import React from "react";
import { Grid } from "@material-ui/core";

const HorizontalGap = ({ size }) => {
  // STYLES
  const marginSize = size ? size : "20px";
 
  return <Grid style={{ margin: marginSize }} />;
};

export default HorizontalGap;
