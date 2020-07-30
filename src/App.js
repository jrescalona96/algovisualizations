import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { generateData } from "./services/testData/data";
import { sort } from "./algorithms/index";
import { runAlgorithm } from "./utils/algorithmUtil";

import NavBar from "./components/navBar";
import HomePage from "./components/homePage/homePage";
import SortingPage from "./components/sortingPage/sortingPage";
import SearchingPage from "./components/searchingPage/searchingPage";

import "./App.scss";
import Load from "./components/common/load/load";

function App() {
  const baseRoute = "/algovisualizations";
  const title = "algovisualizations";
  const [speed, setSpeed] = useState(100);
  const [timer, setTimer] = useState(0);
  const [dataCount, setDataCount] = useState(20);
  const [data, setData] = useState(generateData(dataCount));
  const [workingData, setWorkingData] = useState(data);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(sort[0]);
  const [isLoading, setIsLoading] = useState(false);

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
        .then((snapshots) => {
          runVisualization(snapshots, 0);
        })
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
    <React.Fragment>
      <NavBar title={title} />
      {isLoading ? (
        <Load active={isLoading} />
      ) : (
        <main>
          <Switch>
            <Route exact path={baseRoute} component={() => <HomePage />} />
            <Route
              path={`${baseRoute}/searching`}
              render={(props) => <SearchingPage {...props} />}
            />
            <Route
              path={`${baseRoute}/sorting`}
              render={(props) => (
                <SortingPage
                  loading={isLoading}
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
                  {...props}
                />
              )}
            />
            <Redirect from={`${baseRoute}/*`} to={baseRoute} />
          </Switch>
        </main>
      )}
    </React.Fragment>
  );
}

export default App;
