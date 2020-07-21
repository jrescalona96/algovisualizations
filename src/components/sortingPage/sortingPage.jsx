import React, { useState } from "react";
import { generateData } from "../../services/testData/data";
import { bubbleSort } from "../../algorithms/bubbleSort";
import { selectionSort } from "../../algorithms/selectionSort";
import { mergeSort } from "../../algorithms/mergeSort";
import { insertionSort } from "../../algorithms/insertionSort";
import { Grid, Typography } from "@material-ui/core";
import Chart from "../common/chart";
import SortMenu from "../sortingPage/sortMenu";
import SortOptions from "./sortOptions";
import { runAlgorithm } from "../../utils/algorithmUtil";
import { quickSort } from "../../algorithms/quickSort";

const algorithms = [
  {
    _id: "bubble_sort",
    name: "Bubble Sort",
    algorithm: bubbleSort,
  },
  {
    _id: "selection_sort",
    name: "Selection Sort",
    algorithm: selectionSort,
  },
  {
    _id: "insertion_sort",
    name: "Insertion Sort",
    algorithm: insertionSort,
  },
  {
    _id: "merge_sort",
    name: "Merge Sort",
    algorithm: mergeSort,
  },
  { _id: "quick_sort", name: "Quick Sort", algorithm: quickSort },
];

function SortingPage() {
  const [dataCount, setDataCount] = useState(10);
  const [data, setData] = useState(generateData(dataCount));
  const [speed, setSpeed] = useState(200);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(algorithms[4]);
  const [timer, setTimer] = useState(0);
  const [comparisons, setComparisons] = useState(0);

  const visualize = (snapshots, index) => {
    setComparisons(index);
    const { snapshot } = snapshots[index];
    setData(snapshot);

    setTimer(
      setTimeout(() => {
        if (index < snapshots.length - 1) {
          visualize(snapshots, index + 1);
        }
      }, speed)
    );
  };

  const stopTimer = () => clearTimeout(timer);

  const handleStart = () => {
    stopTimer();
    const iter = runAlgorithm(selectedAlgorithm.algorithm, data);
    visualize(iter, 0);
  };

  const handleChangeDataCount = (_, value) => {
    stopTimer();
    setDataCount(value);
    reset();
  };

  const handleSetDataCount = () => {
    stopTimer();
    reset();
  };

  const handleSetSelectedAlgorithm = (_id) => {
    stopTimer();
    const selectedAlgorithm = algorithms.find((item) => item._id === _id);
    setSelectedAlgorithm(selectedAlgorithm);
    reset();
  };

  const handleChangeSpeed = (_, value) => {
    stopTimer();
    setSpeed(value);
  };

  const reset = () => {
    const data = generateData(dataCount);
    setData(data);
  };

  return (
    <React.Fragment>
      <Typography variant="h3">{comparisons}</Typography>
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
