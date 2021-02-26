import React from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const GradientRedButton = withStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    color: "white",
    height: 38,
    padding: "0 20px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

const StyledButton = ({ variant, startIcon, endIcon, label, type }) => {
  const varientValue = variant ? variant : "contained";
  const startIconValue = startIcon ? startIcon : "";
  const endIconValue = endIcon ? endIcon : "";
  const labelValue = label ? label : "";
  const typeValue = type ? type : "";

  return (
    <GradientRedButton
      variant={varientValue}
      startIcon={startIconValue}
      endIcon={endIconValue}
      type={typeValue}
    >
      {labelValue}
    </GradientRedButton>
  );
};
export default StyledButton;
