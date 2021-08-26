import React from "react";
import {
  Typography,
  Container,
  CardMedia,
  Grid,
  Grow,
  Zoom,
  Slide,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import HorizontalGap from "../utils/horizontal-gap";
import { ReactComponent as EmailImage } from "../../assets/svg/undraw_hey_email_liaa.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#fff",
    overflow: "hidden",
    // '&::before':{
    //   content: '""',
    //   position: 'absolute',
    //   width: '2000px',
    //   height: '2000px',
    //   borderRadius: '50%',
    //   background: 'linear-gradient(45deg, #04befe, #2196f3 35%)',
    //   top: '10%',
    //   right: '60%',
    //   transform: 'translateY(-50%)',
    // },
  },
  emailText: {
    fontWeight: 600,
    lineHeight: 1,
    background: "#3399ff",
    backgroundSize: "100px",
    color: "#fff",
    padding: 0,
    border: 0,
    margin: 0,
    [theme.breakpoints.down("sm")]: {
      fontSize: 65,
    },
  },

  text: {
    fontWeight: 600,
    lineHeight: 1,
    padding: 10,
    border: 1,
    color: "#403c55",
    borderRadius: 10,

    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
      fontWeight: 750,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 15,
      fontWeight: 750,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 20,
      fontWeight: 600,
    },
  },
  spanText: {
    color: "#403c55",
    backgroundColor: "none",
  },

  emailImage: {
    width: "100%",
    margin: 0,

    [theme.breakpoints.down("sm")]: {
      height: "60%",
    },
  },
}));

const Landing = () => {
  const classes = useStyles();
  const checked = true;
  return (
    <>
      <div className={classes.root}>
        <Container>
          <HorizontalGap />

          <Grid
            container
            direction="row"
            justifycontent="space-between"
            alignItems="center"
            spacing={10}
            justify="center"
          >
            
              <Grid item xs={12} sm={6} zeroMinWidth>
              <Grow
              in={checked}
              style={{ transformOrigin: "0 0 0" }}
              {...(checked ? { timeout: 1000 } : {})}
            >
                <CardMedia
                  className={classes.emailImage}
                  component={EmailImage}
                />
                 </Grow>
              </Grid>
           
           
              <Grid item xs={12} sm={6} zeroMinWidth>

              <Zoom
              in={checked}
              style={{ transformOrigin: "0 0 0" }}
              {...(checked ? { timeout: 1000 } : {})}
            >
                <Typography
                  className={classes.emailText}
                  variant="h1"
                  align="center"
                >
                  Email<span className={classes.spanText}>-it</span>
                </Typography>

                </Zoom>
                {/* <Zoom 
                in={checked}
                style={{ transformOrigin: "center" }}
                {...(checked ? { timeout: 5000 } : {})}> */}
                <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                <Typography
                  className={classes.text}
                  variant="h6"
                  align="center"
                >
                  Collect some Feedback from your users!
                </Typography>
                </Slide>
                {/* </Zoom> */}
              </Grid>
           
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Landing;
