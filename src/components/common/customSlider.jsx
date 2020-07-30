import React from "react";
import { Slider, Tooltip, Grid, Typography, Button } from "@material-ui/core";

function ValueLabelComponent(props) {
  const { children, open, value } = props;
  return (
    <Tooltip
      open={open}
      enterTouchDelay={0}
      title={value}
      arrow={true}
      placement="bottom"
    >
      {children}
    </Tooltip>
  );
}

function CustomSlider({
  title,
  value,
  unit,
  onChange,
  maxValue,
  onSubmit,
  buttonLabel,
  label,
}) {
  return (
    <Grid>
      {title && (
        <Typography variant="button" style={{ color: "#3f51b5" }}>
          {title}
        </Typography>
      )}
      <Grid container justify="space-between">
        <Typography variant="h5">
          {label}
          {unit}
        </Typography>
        {onSubmit && (
          <Button variant="contained" color="primary" onClick={onSubmit}>
            {buttonLabel}
          </Button>
        )}
      </Grid>
      <Slider
        ValueLabelComponent={ValueLabelComponent}
        max={maxValue}
        defaultValue={value}
        value={value}
        onChange={onChange}
        aria-label="custom thumb label"
      />
    </Grid>
  );
}

export default CustomSlider;
