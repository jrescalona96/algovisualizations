import React, { useState } from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import { XYPlot, VerticalBarSeries } from "react-vis";
import { generateData } from "../../services/testData/data";
import * as sort from "../sortingPage/algorithms/algorithms";

function SortingPage(props) {
  const [dataCount, setDataCount] = useState(100);
  const [data, setData] = useState(generateData(dataCount));
  const [speed, setSpeed] = useState(0);

  const handleSort = async () => {
    const snapshots = sort.bubbleSort(data);
    visualize(snapshots, 0);
  };

  const visualize = (snapshots, index) => {
    const { snapshot: data } = snapshots[index];
    setData(data);
    setTimeout(() => {
      if (index < snapshots.length - 1) visualize(snapshots, index + 1);
    }, speed);
  };

  return (
    <React.Fragment>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h2">Bubble Sort</Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleSort}>
            Start Sort
          </Button>
        </Grid>
      </Grid>
      <XYPlot
        height={500}
        width={1080}
        colorType="linear"
        colorRange={["blue", "orange"]}
      >
        <VerticalBarSeries
          data={data}
          {...props}
          style={{ mark: { stroke: "white" } }}
        />
      </XYPlot>
    </React.Fragment>
  );
}

export default SortingPage;
