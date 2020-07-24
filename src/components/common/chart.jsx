import React from "react";
import { XYPlot, VerticalBarSeries, LabelSeries } from "react-vis";
import { Grid } from "@material-ui/core";

function Chart({ data }) {
  return (
    <Grid container justify="center">
      <XYPlot
        height={500}
        width={window.innerWidth * 0.85}
        colorType="category"
        colorDomain={[0, 1, 2]}
        colorRange={["orange", "#4051B5", "red"]}
      >
        <VerticalBarSeries data={data} />
        {data.length <= 30 ? (
          <LabelSeries
            style={{
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}
            labelAnchorX="middle"
            data={data}
            getLabel={(d) => d.y}
          />
        ) : null}
      </XYPlot>
    </Grid>
  );
}

export default Chart;
