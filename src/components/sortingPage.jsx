import React from "react";
import { Container, Typography } from "@material-ui/core";
import Chart from "./common/chart";
import AlgorithmMenu from "./algorithmMenu";
import Options from "./options";
import { makeStyles } from "@material-ui/core/styles";

function SortingPage({
  data,
  onStart,
  onSetSelectedAlgorithm,
  selectedAlgorithm,
  algorithms,
  timer,
  speed,
  onChangeSpeed,
  dataCount,
  onChangeDataCount,
}) {
  const classes = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: theme.spacing(0),
    },
    options: {
      position: "fixed",
      bottom: theme.spacing(2),
    },
    header: {
      textAlign: "center",
      fontWeight: "bold",
      color: "#3f51b5",
    },
  }))();
  return (
    <Container className={classes.root}>
      <Typography variant="h2" className={classes.header}>
        {selectedAlgorithm.name}
      </Typography>
      <Chart id="chart" data={data} />
      <AlgorithmMenu
        selectedAlgorithm={selectedAlgorithm}
        algorithms={algorithms}
        onStart={onStart}
        timer={timer}
        onSetSelectedAlgorithm={(val) => onSetSelectedAlgorithm(val)}
      />
      <Container className={classes.options}>
        <Options
          onChangeSpeed={(val) => onChangeSpeed(val)}
          speed={speed}
          dataCount={dataCount}
          onChangeDataCount={(val) => onChangeDataCount(val)}
        />
      </Container>
    </Container>
  );
}

export default SortingPage;
