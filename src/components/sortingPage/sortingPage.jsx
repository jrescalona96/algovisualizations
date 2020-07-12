import React, { useState } from "react";
import { generateData } from "../../services/testData/data";
import { bubbleSort } from "../../algorithms/bubbleSort";
import { Typography, Grid, Button, Box } from "@material-ui/core";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import CustomSlider from "../common/customSlider";
import CustomMenu from "../common/customMenu";
import Chart from "../common/chart";
import _ from "lodash";

const algorithms = [
  {
    _id: "bubble_sort",
    name: "Bubble Sort",
    run: bubbleSort,
  },
  {
    _id: "selection_sort",
    name: "Selection Sort",
    run: bubbleSort,
  },
  { _id: "quick_sort", name: "Quick Sort", run: bubbleSort },
];

function SortingPage(props) {
  const [dataCount, setDataCount] = useState(100);
  const [data, setData] = useState(generateData(dataCount));
  const [speed, setSpeed] = useState(0);
  const [algorithm, setAlgorithm] = useState(algorithms[0]);
  const maxDataCount = 250;

  const visualize = (snapshots, index) => {
    const { snapshot: data } = snapshots[index];
    setData(data);
    setTimeout(() => {
      if (index < snapshots.length - 1) {
        visualize(snapshots, index + 1);
      }
    }, speed);
  };

  const handleStart = () => {
    const iterations = algorithm.run(data);
    visualize(iterations, 0);
  };

  const handleChangeDataCount = (event, value) => {
    setDataCount(value);
  };

  const handleSetDataCount = () => {
    setData(generateData(dataCount));
  };

  const handleSetAlgorithm = (_id) => {
    const algorithm = algorithms.find((item) => item._id === _id);
    setAlgorithm(algorithm);
  };

  const handleChangeSpeed = (_, value) => {
    setSpeed(value);
  };

  return (
    <React.Fragment>
      <Chart data={data} />

      <Grid container justify="space-between">
        <Grid item xs={12} sm={6}>
          <CustomSlider
            title="Visualization Speed"
            maxValue={1000}
            onChange={handleChangeSpeed}
            value={speed}
            max={maxDataCount}
          />
          <CustomSlider
            title="Data Set Count"
            maxValue={maxDataCount}
            onChange={handleChangeDataCount}
            onSubmit={handleSetDataCount}
            value={dataCount}
            max={maxDataCount}
            buttonName="Start"
          />
        </Grid>

        <Grid item align="end" xs={12} sm={6}>
          <Typography variant="h2">{algorithm.name}</Typography>
          <Grid container justify="flex-end">
            <CustomMenu
              options={algorithms}
              onSelect={(_id) => handleSetAlgorithm(_id)}
              name="Algorithm"
            />
            <Box ml={1}>
              <Button
                l={2}
                variant="contained"
                color="secondary"
                onClick={handleStart}
                startIcon={<PlayCircleOutlineIcon />}
              >
                Start
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default SortingPage;
