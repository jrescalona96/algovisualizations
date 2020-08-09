import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import CustomSlider from "../common/customSlider";
import ControlsContext from "../../context/ControlsContext";

function Options() {
  const {
    speed,
    dataCount,
    handleChangeSpeed,
    handleChangeDataCount,
  } = useContext(ControlsContext);

  const maxDataCount = 200;
  const formattedSpeed = (speed / 1000).toFixed(2);
  const maxSpeed = 1500;
  const speedTitle = `Speed (${formattedSpeed}s)`;
  const dataCountTitle = `Count (${dataCount})`;

  return (
    <Grid container justify="space-evenly">
      <Grid item xs={12} sm={5}>
        <CustomSlider
          title={speedTitle}
          maxValue={maxSpeed}
          onChange={handleChangeSpeed}
          value={speed}
        />
      </Grid>
      <Grid item xs={12} sm={5}>
        <CustomSlider
          title={dataCountTitle}
          maxValue={maxDataCount}
          onChange={handleChangeDataCount}
          value={dataCount}
        />
      </Grid>
    </Grid>
  );
}

export default Options;
