import React from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const GradientBlueButton = withStyles({
  root: {
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    border: 0,
    color: "white",
    height: 36,
    padding: "0 7px",
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
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
    <GradientBlueButton
      variant={varientValue}
      startIcon={startIconValue}
      endIcon={endIconValue}
      type={typeValue}
    >
      {labelValue}
    </GradientBlueButton>
  );
};
export default StyledButton;


