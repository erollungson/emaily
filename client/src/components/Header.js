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
  title: {
    flexGrow: 1,
  },
  appBar: {
    position: "static",
    background: "#2196f3",
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
          <Button startIcon={<FcGoogle />} color="inherit" href="/auth/google">
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
          <Typography variant="h4" className={classes.title}>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to={auth ? "/surveys" : "/"}
            >
              Email-it
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
