import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch } from "react-redux";
import * as actions from "../actions";

import GradientBlueButton from "./utils/gradient-blue-button";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const Payments = ({ creditsCount }) => {
  const dispatch = useDispatch();

  return (
    <StripeCheckout
      name="Emaily"
      description="$5 for 5 email credits"
      amount={500}
      token={(token) => dispatch(actions.handleToken(token))}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <GradientBlueButton
        variant="contained"
        startIcon={<AddCircleIcon />}
        label={`Credits: ${creditsCount}`}
      />
    </StripeCheckout>
  );
};

export default Payments;
