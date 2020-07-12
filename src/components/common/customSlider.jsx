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

function CustomSlider({ title, value, onChange, maxValue, onSubmit }) {
  return (
    <Grid>
      {title && <Typography variant="button">{title}</Typography>}
      <Grid container justify="space-between">
        <Typography variant="h5">{value}</Typography>
        {onSubmit && (
          <Button variant="contained" color="primary" onClick={onSubmit}>
            Submit
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
