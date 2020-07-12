import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import CustomSlider from "./common/customSlider";

function DataCountSlider({
  dataCount,
  maxDataCount,
  onChangeDataCount,
  onSetDataCount,
}) {
  return (
    <Grid item>
      <Grid item xs={12} sm={6}>
        <CustomSlider
          defaultValue={dataCount}
          value={dataCount}
          max={maxDataCount}
          onChange={onChangeDataCount}
        />
      </Grid>
    </Grid>
  );
}

export default DataCountSlider;
