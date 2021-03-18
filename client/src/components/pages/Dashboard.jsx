import React from "react";
import { Link } from "react-router-dom";
import { Typography, Container, Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import AddIcon from "@material-ui/icons/Add";
import HorizontalGap from "../utils/horizontal-gap";

const useStyles = makeStyles((theme) => ({
  root: {
    //  backgroundColor: theme.palette.background.paper,
    //  position: 'relative',
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(5),
    right: theme.spacing(5),
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  const fab = {
    color: "primary",
    className: classes.fab,
    icon: <AddIcon />,
    label: "Add",
  };

  return (
    <div className={classes.root}>
      <>
        <Container>
          <HorizontalGap />

          <Typography> Dashboard</Typography>

          <Link to="/surveys/new" >
            <Fab
              aria-label={fab.label}
              className={fab.className}
              color={fab.color}
              size={fab.size}
            >
              {fab.icon}
            </Fab>
          </Link>
        </Container>
      </>
    </div>
  );
};

export default Dashboard;
