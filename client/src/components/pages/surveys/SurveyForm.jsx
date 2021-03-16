import React, { Component } from "react";
import _ from "lodash";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
import { NavigateNext } from "@material-ui/icons";
import CancelIcon from "@material-ui/icons/Cancel";

import SurveyField from "./SurveyField";
import GradientBlueButton from "../../utils/gradient-blue-button";
import GradientRedButton from "../../utils/gradient-red-button";
import HorizontalGap from "../../utils/horizontal-gap";
import validateEmails from "../../utils/validateEmails";

const FIELDS = [
  { label: "Survey Title", name: "title" },
  { label: "Subject Line", name: "subject" },
  { label: "Email Body", name: "body" },
  {
    label: "Recipient List (use comma to seperate an email)",
    name: "recipients",
  },
];

class SurveyForm extends Component {
  render() {
    return (
      <>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          <Typography variant="h4">Create Survey</Typography>

          {_.map(FIELDS, ({ label, name }, index) => {
            return (
              <Field
                key={index}
                component={SurveyField}
                type="text"
                label={label}
                name={name}
              />
            );
          })}

          <HorizontalGap />
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <Link to="/surveys" style={{ textDecoration: "none" }}>
                <GradientRedButton
                  startIcon={<CancelIcon />}
                  variant="contained"
                  label="Cancel"
                />
              </Link>
            </Grid>

            <Grid item>
              <GradientBlueButton
                variant="contained"
                type="submit"
                endIcon={<NavigateNext />}
                label="Next"
              />
            </Grid>
          </Grid>
        </form>
      </>
    );
  }
}

function validate(values) {
  const errors = {};
  console.log("hello");
  errors.recipients = validateEmails(values.recipients || "");

  _.each(FIELDS, ({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide a ${name}`;
    }
  });
  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false,
})(SurveyForm);
