import React from "react";
import Payments from "./Payments";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button, Typography, Grid } from "@material-ui/core";
import { FcGoogle } from "react-icons/fc";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  appBar: {
    position: "static",
    background: 'linear-gradient(-45deg, #04befe, #2196f3 35%)',
  },
  gButton: {
    fontWeight: 600,
  },

  emailText: {
    fontWeight: 600,
    lineHeight: 1,
    // backgroundColor: "#3399ff",
    color: "#fff",
    [theme.breakpoints.down("sm")]: {

    },
  },

  spanText: {
    color: "#403c55",
    backgroundColor: "none",
  },
}));

const Header = () => {
  const classes = useStyles();
  const auth = useSelector((state) => state.auth);

  function RenderContent() {
    switch (auth) {
      case null:
        return null;
      case false:
        return (
          <Button className={classes.gButton} startIcon={<FcGoogle />} color="inherit" href="/auth/google">
            Sign in with Google
          </Button>
        );
      default:
        return [
          <Grid key={1}
            container
            direction="row"
            justify="flex-end"
            alignItems="flex-start"
            spacing={1}
          > 
           <Grid item >
            <Payments creditsCount={auth.credits} />
            </Grid>
            <Grid item >
            <Button variant="contained" color="secondary" href="/api/logout">
              Logout
            </Button>
            </Grid>
          </Grid>
        ];
    }
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Grid  
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          spacing={1}>

          <Grid item >
          <Typography className={classes.emailText} variant="h4" >
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to={auth ? "/surveys" : "/"}
            >
              Email<span className={classes.spanText}>-it</span>
            </Link>
          </Typography>
          </Grid>
          <Grid item >
          <RenderContent />
          </Grid>

          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
