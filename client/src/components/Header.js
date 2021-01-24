import React from "react";
import Payments from "./Payments";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";

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
  const auth = useSelector(state => state.auth);

  function RenderContent() {
    switch (auth) {
      case null:
        return null;
      case false:
        return (
          <Button color="inherit" href="/auth/google">
            Login With Google
          </Button>
        );
      default:
        return [
          <Payments key={1} />,
          <Typography style={{ margin: '0 10px'}} key={2}>Credits: {auth.credits}</Typography>,
          <Button key={3} color="inherit" href="/api/logout">
            Logout
          </Button>,
        ];
    }
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to={ auth ? "/surveys" : "/" }
            >
              Emaily
            </Link>
          </Typography>

          <RenderContent />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
