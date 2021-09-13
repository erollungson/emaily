import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import * as actions from "../../../actions";
import HorizontalSpace from "../../utils/horizontal-space";


const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },

    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    
  });

const SurveyList = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchSurveys());
  }, [dispatch]);

  function RenderSurveys() {
    const surveys = useSelector((state) => state.surveys);
    const classes = useStyles();
  
    return surveys.reverse().map(survey => {
        return (
            <>
          <Card variant="outlined" className={classes.root} key={survey._id}>
            <CardContent>
              <Typography className={classes.title}>{survey.title}</Typography>
              <HorizontalSpace size={10}/>
              <Typography variant="h5" component="h3">
                {survey.body}
              </Typography>

              <Typography variant="body2" component="p" align="right">
                Sent On: {new Date(survey.dateSent).toLocaleDateString()}
              </Typography>
              <CardActions>
              <Button size="small"  color="primary"> Yes: {survey.yes} </Button>
              <Button size="small"  color="secondary">No: {survey.no} </Button>
              </CardActions>
            </CardContent>
          </Card>
           <HorizontalSpace />
           </>
        );

    });
  }

  return( 
  <div>
    <RenderSurveys/>
  </div>
  );
};

export default SurveyList;
