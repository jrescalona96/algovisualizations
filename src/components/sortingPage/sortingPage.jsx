import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Chart from "../common/chart";
import AlgorithmsMenu from "../algorithmsMenu";
import Options from "../options";
import "./sortingPage.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(0),
  },
  options: {
    position: "fixed",
    bottom: theme.spacing(2),
  },
}));

function SortingPage({
  data,
  onStart,
  onSetSelectedAlgorithm,
  selectedAlgorithm,
  algorithms,
  timer,
  speed,
  dataCount,
  onChangeSpeed,
  onChangeDataCount,
}) {
  const classes = useStyles();
  return (
    <Container id="pageContainer">
      <React.Fragment>
        <Typography className="chart-header" variant="h3">
          {selectedAlgorithm.name}
        </Typography>
        <Chart id="chart" data={data} />
        <AlgorithmsMenu
          selectedAlgorithm={selectedAlgorithm}
          algorithms={algorithms}
          onSetSelectedAlgorithm={onSetSelectedAlgorithm}
          onStart={onStart}
          timer={timer}
        />
        <Container className={classes.options}>
          <Options
            speed={speed}
            dataCount={dataCount}
            onChangeSpeed={onChangeSpeed}
            onChangeDataCount={onChangeDataCount}
          />
        </Container>
      </React.Fragment>
      )
    </Container>
  );
}

export default SortingPage;
