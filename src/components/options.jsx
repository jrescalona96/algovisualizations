import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import CustomSlider from "./common/customSlider";
import DataContext from "../context/DataContext";

function Options() {
  const data = useContext(DataContext);
  const maxDataCount = 120;
  const formattedSpeed = (data.speed / 1000).toFixed(2);
  const maxSpeed = 1500;
  const speedTitle = `Speed (${formattedSpeed} sec)`;
  const dataCountTitle = `Count (${data.dataCount})`;

  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={5}>
        <CustomSlider
          title={speedTitle}
          maxValue={maxSpeed}
          onChange={data.handleChangeSpeed}
          value={data.speed}
        />
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={12} sm={5}>
        <CustomSlider
          title={dataCountTitle}
          maxValue={maxDataCount}
          onChange={data.handleChangeDataCount}
          value={data.dataCount}
        />
      </Grid>
    </Grid>
  );
}

export default Options;
