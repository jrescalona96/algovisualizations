import React, { useState } from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import { XYPlot, VerticalBarSeries } from "react-vis";
import { generateData } from "../../services/testData/data";
import * as sort from "../sortingPage/algorithms/algorithms";

function SortingPage(props) {
  const [data, setData] = useState(generateData());
  const [speed, setSpeed] = useState(0.05);

  const handleSort = () => {
    const iterations = sort.bubbleSort(data);
    visualize(iterations, 0);
  };

  const visualize = (iterations, index) => {
    let data = [...iterations[index].info];

    setData(data);

    setTimeout(() => {
      if (index < iterations.length - 1) visualize(iterations, index + 1);
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
        <VerticalBarSeries data={data} {...props} />
      </XYPlot>
    </React.Fragment>
  );
}

export default SortingPage;
