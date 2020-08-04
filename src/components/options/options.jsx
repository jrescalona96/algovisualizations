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

  const maxDataCount = 120;
  const formattedSpeed = (speed / 1000).toFixed(2);
  const maxSpeed = 1500;
  const speedTitle = `Speed (${formattedSpeed} sec)`;
  const dataCountTitle = `Count (${dataCount})`;

  return (
    <Grid container justify="center">
      <Grid item xs={5}>
        <CustomSlider
          title={speedTitle}
          maxValue={maxSpeed}
          onChange={handleChangeSpeed}
          value={speed}
        />
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={5}>
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
