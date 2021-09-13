import React from "react";
import { Link } from "react-router-dom";
import { Typography, Container, Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import AddIcon from "@material-ui/icons/Add";
import HorizontalSpace from "../utils/horizontal-space";
import SurveyList from "./surveys/SurveyList";

const useStyles = makeStyles((theme) => ({
  root: {
    //  backgroundColor: theme.palette.background.paper,
    //  position: 'relative',
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  title: {
    fontWeight: 600,
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
          <HorizontalSpace size={"50px"}/>

          <Typography className= {classes.title} variant="h5" component="h3" > Surveys</Typography>
          <HorizontalSpace size={"30px"}/>
          
          <SurveyList/>
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
