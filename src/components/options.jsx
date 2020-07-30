import React from "react";
import { Grid } from "@material-ui/core";
import CustomSlider from "./common/customSlider";

function Options({ onChangeSpeed, speed, dataCount, onChangeDataCount }) {
  const maxDataCount = 1000;
  const formattedSpeed = (speed / 1000).toFixed(2);
  const maxSpeed = 1500;
  const speedTitle = `Speed (${formattedSpeed} sec)`;
  const dataCountTitle = `Count (${dataCount})`;

  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={5}>
        <CustomSlider
          title={speedTitle}
          maxValue={maxSpeed}
          onChange={onChangeSpeed}
          value={speed}
        />
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={12} sm={5}>
        <CustomSlider
          title={dataCountTitle}
          maxValue={maxDataCount}
          onChange={onChangeDataCount}
          value={dataCount}
        />
      </Grid>
    </Grid>
  );
}

export default Options;
