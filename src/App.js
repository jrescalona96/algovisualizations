import React, { useState } from "react";
import { generateData } from "./services/testData/data";
import { sort } from "./algorithms/index";
import SortingPage from "./components/sortingPage/sortingPage";
import AppBar from "./components/customAppBar";
import { runAlgorithm } from "./utils/algorithmUtil";
import Options from "./components/options";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./App.scss";

const useStyles = makeStyles((theme) => ({
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
  },
}));

function App() {
  const title = "algovisualizations";
  const classes = useStyles();
  const [speed, setSpeed] = useState(100);
  const [timer, setTimer] = useState(0);
  const [dataCount, setDataCount] = useState(20);
  const [data, setData] = useState(generateData(dataCount));
  const [workingData, setWorkingData] = useState(data);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(sort[0]);

  const resetTimer = () => {
    clearTimeout(timer);
    setTimer(0);
  };

  const runVisualization = (snapshots, index) => {
    setData(snapshots[index].data);
    setTimer(
      setTimeout(() => {
        if (index < snapshots.length - 1) {
          runVisualization(snapshots, index + 1);
        }
      }, speed)
    );
  };

  const handleStart = () => {
    if (timer === 0) {
      runAlgorithm(selectedAlgorithm.algorithm, workingData)
        .then((snapshots) => runVisualization(snapshots, 0))
        .catch((e) => console.log(e));
    } else {
      resetTimer();
      resetData();
    }
  };

  const handleChangeSpeed = (_, value) => {
    resetTimer();
    setSpeed(value);
  };

  const handleSetSelectedAlgorithm = (_id) => {
    const selectedAlgorithm = sort.find((item) => item._id === _id);
    setSelectedAlgorithm(selectedAlgorithm);
    resetTimer();
    setData(workingData);
  };

  const handleChangeDataCount = (_, value) => {
    setDataCount(value);
    resetData();
  };

  const resetData = () => {
    let newData = generateData(dataCount);
    resetTimer();
    setWorkingData(newData);
    setData(workingData);
  };

  return (
    <main>
      <AppBar title={title} />

      <Typography className={classes.header} variant="h2">
        {selectedAlgorithm.name}
      </Typography>

      <SortingPage
        data={data}
        selectedAlgorithm={selectedAlgorithm}
        algorithms={sort}
        onStart={handleStart}
        onSetSelectedAlgorithm={handleSetSelectedAlgorithm}
        timer={timer}
      />
      <Container item className={classes.options}>
        <Options
          onChangeSpeed={handleChangeSpeed}
          speed={speed}
          dataCount={dataCount}
          onChangeDataCount={handleChangeDataCount}
        />
      </Container>
    </main>
  );
}

export default App;
