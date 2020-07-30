import React from "react";
import { Container, Typography } from "@material-ui/core";
import Chart from "../common/chart";
import AlgorithmMenu from "../algorithmMenu";

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
      <Typography variant="h2">{selectedAlgorithm.name}</Typography>
      <Chart id="chart" data={data} />
      <AlgorithmMenu
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
