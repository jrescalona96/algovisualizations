import React, { useState } from "react";
import { generateData } from "../../services/testData/data";
import { bubbleSort } from "../../algorithms/bubbleSort";
import { Grid } from "@material-ui/core";

import CustomSlider from "../common/customSlider";

import Chart from "../common/chart";
import SortMenu from "../sortingPage/sortMenu";
import SortOptions from "./sortOptions";

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
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(algorithms[0]);
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
    const iterations = selectedAlgorithm.run(data);
    visualize(iterations, 0);
  };

  const handleChangeDataCount = (event, value) => {
    setDataCount(value);
  };

  const handleSetDataCount = () => {
    setData(generateData(dataCount));
  };

  const handleSetSelectedAlgorithm = (_id) => {
    const selectedAlgorithm = algorithms.find((item) => item._id === _id);
    setSelectedAlgorithm(selectedAlgorithm);
  };

  const handleChangeSpeed = (_, value) => {
    setSpeed(value);
  };

  return (
    <React.Fragment>
      <Chart data={data} />

      <Grid container justify="space-between">
        <Grid item xs={12} sm={6}>
          <SortOptions
            onChangeSpeed={handleChangeSpeed}
            speed={speed}
            dataCount={dataCount}
            onChangeDataCount={handleChangeDataCount}
            onSetDataCount={handleSetDataCount}
          />
        </Grid>
        <Grid item align="end" xs={12} sm={6}>
          <SortMenu
            selectedAlgorithm={selectedAlgorithm}
            algorithms={algorithms}
            onSetSelectedAlgorithm={handleSetSelectedAlgorithm}
            onStart={handleStart}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default SortingPage;
