import React from "react";
import { Slider, Tooltip } from "@material-ui/core";

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

function CustomSlider({ defaultValue, value, onChange, max }) {
  return (
    <Slider
      max={max}
      ValueLabelComponent={ValueLabelComponent}
      aria-label="custom thumb label"
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
    />
  );
}

export default CustomSlider;
