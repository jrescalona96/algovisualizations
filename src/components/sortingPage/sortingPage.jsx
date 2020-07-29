import React from "react";
import { Container } from "@material-ui/core";
import Chart from "../common/chart";
import SortMenu from "../sortingPage/sortMenu";

function SortingPage({
  data,
  onStart,
  onSetSelectedAlgorithm,
  selectedAlgorithm,
  algorithms,
  timer,
}) {
  return (
    <Container>
      <Chart id="chart" data={data} />
      <SortMenu
        selectedAlgorithm={selectedAlgorithm}
        algorithms={algorithms}
        onSetSelectedAlgorithm={onSetSelectedAlgorithm}
        onStart={onStart}
        timer={timer}
      />
    </Container>
  );
}

export default SortingPage;
