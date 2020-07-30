import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { generateData } from "./services/testData/data";
import { runAlgorithm } from "./utils/algorithmUtil";
import { sort } from "./algorithms/index";

import NavBar from "./components/navBar";
import HomePage from "./components/homePage/homePage";
import SortingPage from "./components/sortingPage/sortingPage";
import SearchingPage from "./components/searchingPage/searchingPage";

import "./App.scss";

function App() {
  const appName = "algovisualizations";

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

  const resetData = () => {
    let newData = generateData(dataCount);
    resetTimer();
    setWorkingData(newData);
    setData(workingData);
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

  const handleChangeSpeed = (value) => {
    resetTimer();
    setSpeed(value);
  };

  const handleSetSelectedAlgorithm = (_id) => {
    const selectedAlgorithm = sort.find((item) => item._id === _id);
    setSelectedAlgorithm(selectedAlgorithm);
    resetTimer();
    setData(workingData);
  };

  const handleChangeDataCount = (value) => {
    setDataCount(value);
    resetData();
  };

  const mutators = {
    data: data,
    dataCount: dataCount,
    selectedAlgorithm: selectedAlgorithm,
    algorithms: sort,
    timer: timer,
    speed: speed,
    onStart: handleStart,
    onSetSelectedAlgorithm: (val) => handleSetSelectedAlgorithm(val),
    onChangeDataCount: (val) => handleChangeDataCount(val),
    onChangeSpeed: (val) => handleChangeSpeed(val),
  };

  return (
    <React.Fragment>
      <NavBar title={appName} />
      <main>
        <Switch>
          <Route exact path="/" component={() => <HomePage />} />
          <Route
            path="/searching"
            render={(props) => <SearchingPage {...props} />}
          />
          <Route
            path="/sorting"
            render={(props) => (
              <SortingPage
                data={data}
                selectedAlgorithm={selectedAlgorithm}
                algorithms={sort}
                onStart={handleStart}
                onSetSelectedAlgorithm={handleSetSelectedAlgorithm}
                timer={timer}
                onChangeSpeed={handleChangeSpeed}
                speed={speed}
                dataCount={dataCount}
                onChangeDataCount={handleChangeDataCount}
              />
            )}
          />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
