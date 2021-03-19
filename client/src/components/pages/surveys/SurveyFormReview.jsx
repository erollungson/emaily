import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button, Typography, Grid } from "@material-ui/core";
import { FaTelegramPlane, FaChevronCircleLeft } from "react-icons/fa";

import * as actions from "../../../actions/index";
import HorizontalGap from "../../utils/horizontal-gap";
import { Title, StyledPaper } from "../../utils/form-utils";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history}) => {
  const { title, subject, body, recipients } = formValues;

  return (
    <>
      <StyledPaper>
      <Title variant="h4">Survey Summary</Title>
      <HorizontalGap size={50} />

      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={2}
      >
        <Grid item xs={12} sm={6}>
          <Typography variant="h6"> Survey Title: </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">{title}</Typography>
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={2}
      >
        <Grid item xs={12} sm={6}>
          <Typography variant="h6"> Survey Subject: </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">{subject}</Typography>
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={2}
      >
        <Grid item xs={12} sm={6}>
          <Typography variant="h6"> Survey Body: </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">{body}</Typography>
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={2}
      >
        <Grid item xs={12} sm={6}>
          <Typography variant="h6"> Survey Recipients: </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">{recipients}</Typography>
        </Grid>
      </Grid>

      <HorizontalGap size={50}/>

      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            onClick={onCancel}
            startIcon={<FaChevronCircleLeft />}
          >
            Back
          </Button>
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={ () => submitSurvey(formValues, history)}
            endIcon={<FaTelegramPlane />}
          >
            Send Survey
          </Button>
        </Grid>
      </Grid>
      </StyledPaper>
    </>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
