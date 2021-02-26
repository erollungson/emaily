import React, { useState } from "react";
import { CssBaseline, Container } from "@material-ui/core";
import { reduxForm } from "redux-form";

import HorizontalGap from "../../utils/horizontal-gap";
import SurveyForm from "./SurveyForm";
import SurverFormReview from "./SurveyFormReview";

const SurveyNew = () => {
  const [showFormReview, setShowFormReview] = useState(false);

  function RenderContent() {
    if (showFormReview) {
      return <SurverFormReview onCancel={() => setShowFormReview(false)} />;
    }

    return <SurveyForm onSurveySubmit={() => setShowFormReview(true)} />;
  }

  return (
    <>
      <Container>
        <CssBaseline />
        <HorizontalGap />
        <RenderContent />
      </Container>
    </>
  );
};

export default reduxForm({
  form: "surveyForm",
})(SurveyNew);
