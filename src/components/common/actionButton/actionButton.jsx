import React from "react";
import { Button } from "@material-ui/core";

function ActionButton({ label, icon, isDisabled, onClick, color }) {
  return (
    <Button
      fullWidth
      variant="contained"
      disabled={isDisabled}
      onClick={onClick}
      size="medium"
      startIcon={icon}
      color={color}
    >
      {label}
    </Button>
  );
}

export default ActionButton;
