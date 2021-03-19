import * as React from "react";
import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import HorizontalGap from "../../utils/horizontal-gap";

const ValidationTextField = withStyles({
  root: {
    '& input:valid + fieldset': {
      borderColor: '#52b202',
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important', // override inline-style
    },
  },
})(TextField);

export default function SurveyField({
  input,
  label,
  meta: { error, touched },
}) {
  return (
    <>
      <HorizontalGap />
      <ValidationTextField
        id="validation-outlined-input"
        variant="outlined"
        label={label}
        fullWidth
        error={touched && error ? true : false}
        helperText={touched && error}
        required
        {...input}
      />
    </>
  );
}
