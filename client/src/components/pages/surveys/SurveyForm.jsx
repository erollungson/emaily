import React from "react";
import _ from "lodash";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";
import { FaChevronCircleRight, FaTimesCircle, FaExclamationCircle } from "react-icons/fa";

import SurveyField from "./SurveyField";
import HorizontalGap from "../../utils/horizontal-gap";
import validateEmails from "../../utils/validateEmails";
import { Title, StyledPaper } from "../../utils/form-utils";

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
       <StyledPaper>
        <form onSubmit={handleSubmit(onSurveySubmit)}>
         
          <Title variant="h4">Create Survey</Title>
          <HorizontalGap size={50}/>

         {renderFields()}

          <HorizontalGap size={50}/>
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
        </StyledPaper>
      </>
    );
  }

function validate(values) {
  const errors = {};
 
  errors.recipients = validateEmails(values.recipients || '');

  _.each(FIELDS, ({ name }) => {
    if (!values[name]) {
      errors[name] = (
          <Grid component="span" direction="row" container spacing={1}>
            <Grid item component="span">
              <FaExclamationCircle size={15} />
            </Grid>
            <Grid item component="span">You must provide a {name}</Grid>
          </Grid>
      );
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false,
})(SurveyForm);
