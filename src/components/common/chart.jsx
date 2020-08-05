import React, { useContext } from "react";
import { XYPlot, VerticalBarSeries, LabelSeries } from "react-vis";
import { Grid } from "@material-ui/core";
import DataContext from "../../context/DataContext";

function Chart() {
  const data = useContext(DataContext);
  const hasMinimalData = data.length <= 50;

  const options = {
    colorType: "category",
    colorDomain: [0, 1, 2],
    colorRange: ["#3f51b5", "orange", "red"],
    height: window.innerWidth * 0.45,
    width: window.innerWidth * 0.95,
  };

  const showDataLabels = () => (
    <LabelSeries labelAnchorX="middle" data={data} getLabel={(d) => d.y} />
  );

  return (
    <Grid container justify="center">
      <XYPlot {...options}>
        <VerticalBarSeries data={data} />
        {hasMinimalData && showDataLabels()}
      </XYPlot>
    </Grid>
  );
}

export default Chart;
