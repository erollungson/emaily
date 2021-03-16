import React from "react";
import { TextField } from "@material-ui/core";
import HorizontalGap from "../../utils/horizontal-gap";

export default function SurveyField({
  input,
  label,
  meta: { error, touched },
}) {


  return (
    <>

      <HorizontalGap />
      <TextField
        id="outlined-basic"
        variant="outlined"
        label={label}
        fullWidth
        error={touched && error? true : false}
        helperText={touched && error}
        required
        {...input}
      />
      
    </>
  );
}
