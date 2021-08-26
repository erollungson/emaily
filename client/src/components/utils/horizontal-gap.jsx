import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      margin: "80px",
    },
    [theme.breakpoints.up("sm")]: {
      margin: "130px",
    },
  }

}));

const HorizontalGap = ({ size }) => {
  const classes = useStyles();
  // STYLES
  const marginSize = size ? size : "20px";
 
  return <Grid className={classes.root ? classes.root : marginSize}  />;
};

export default HorizontalGap;
