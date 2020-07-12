import React from "react";
import { XYPlot, VerticalBarSeries } from "react-vis";
import { Grid } from "@material-ui/core";

function Chart({ data }) {
  return (
    <Grid container justify="center">
      <XYPlot
        height={500}
        width={window.innerWidth * 0.85}
        colorType="linear"
        colorRange={["blue", "orange"]}
      >
        <VerticalBarSeries data={data} />
      </XYPlot>
    </Grid>
  );
}

export default Chart;
