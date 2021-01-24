import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch } from 'react-redux';
import * as actions from '../actions';

import { Button } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const StyledButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 20px',
      boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);


const Payments = () => {
  const dispatch = useDispatch();

  return (
    <StripeCheckout
      name="Emaily"
      description="$5 for 5 email credits"
      amount={500}
      token={(token) => dispatch(actions.handleToken(token))}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
        <StyledButton variant="contained" color="secondary" startIcon={<AddCircleIcon />}>Credits</StyledButton>
    </StripeCheckout>
  );
};

export default Payments;
