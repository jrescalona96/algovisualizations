import React from "react";
import { XYPlot, VerticalBarSeries, LabelSeries, MarkSeries } from "react-vis";
import { Grid } from "@material-ui/core";

function Chart({ data }) {
  return (
    <Grid container justify="center">
      <XYPlot
        height={500}
        width={window.innerWidth * 0.85}
        colorType="linear"
        colorRange={["gray", "orange"]}
      >
        <VerticalBarSeries data={data} />

        {data.length <= 30 ? (
          <LabelSeries
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
            labelAnchorX="middle"
            animation
            data={data}
            getLabel={(d) => d.y}
          />
        ) : (
          <MarkSeries
            animation
            data={data}
            colorType="literal"
            opacity="1"
            colorRange={["orange", "red"]}
          />
        )}
      </XYPlot>
    </Grid>
  );
}

export default Chart;
