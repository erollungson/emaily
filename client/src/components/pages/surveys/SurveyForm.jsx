import React from "react";
import _ from "lodash";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import { Grid, Typography, Button } from "@material-ui/core";
import { FaChevronCircleRight, FaTimesCircle } from "react-icons/fa";

import SurveyField from "./SurveyField";
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

const SurveyForm = ( {handleSubmit, onSurveySubmit}) => {

  const renderFields = () => {
    return _.map(FIELDS, ({ label, name }, index) => {
      console.log(index);
      return (
        <Field
          key={index}
          component={SurveyField}
          type="input"
          label={label}
          name={name}
        />
      );
    });
  }

    return (
      <>
        <form onSubmit={handleSubmit(onSurveySubmit)}>
          <Typography variant="h4">Create Survey</Typography>

         {renderFields()}

          <HorizontalGap />
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <Link to="/surveys" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<FaTimesCircle />}
                >Cancel</Button>
              </Link>
            </Grid>

            <Grid item>
              <Button
                variant="contained"
                type="submit"
                color="primary"
                endIcon={<FaChevronCircleRight />}
              >Next</Button>
            </Grid>
          </Grid>
        </form>
      </>
    );
  }

function validate(values) {
  const errors = {};
 
  errors.recipients = validateEmails(values.recipients || '');

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
