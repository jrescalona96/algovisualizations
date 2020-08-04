import React, { Fragment, useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { generateData } from "./services/testData/data";
import { sort } from "./algorithms/index";
import { mapChartData } from "./utils/chartUtils";

import NavBar from "./components/navBar";
import HomePage from "./components/homePage/homePage";
import SortingPage from "./components/sortingPage/sortingPage";
import SearchingPage from "./components/searchingPage/searchingPage";

import { DataProvider } from "./context/DataContext";

import "./App.scss";

function App() {
  const baseRoute = "/algovisualizations";
  const title = "algovisualizations";
  const [speed, setSpeed] = useState(100);
  const [timer, setTimer] = useState(0);
  const [dataCount, setDataCount] = useState(20);
  const [data, setData] = useState(generateData(dataCount));
  const [workingData, setWorkingData] = useState(data);
  const [recordSnapshots, setRecordSnapshots] = useState([]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(sort[0]);

  const resetTimer = () => {
    clearTimeout(timer);
    setTimer(0);
  };

  const runAlgorithm = async () => {
    const { snapshots } = selectedAlgorithm.algorithm(workingData);
    return await mapChartData(snapshots);
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

  const resetData = () => {
    let newData = generateData(dataCount);
    resetTimer();
    setWorkingData(newData);
    setData(workingData);
  };

  const handleStart = async () => {
    const notRunning = timer === 0;
    if (notRunning) {
      const noRecordAvailable = recordSnapshots.length === 0;

      if (noRecordAvailable) {
        const mapped = await runAlgorithm();
        setRecordSnapshots(mapped);
        runVisualization(mapped, 0);
      } else {
        runVisualization(recordSnapshots, 0);
      }
    } else {
      handleReset();
    }
  };

  const handleReset = () => {
    resetTimer();
    resetData();
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
    setRecordSnapshots([]);
  };

  const handleChangeDataCount = (_, value) => {
    setDataCount(value);
    resetData();
    setRecordSnapshots([]);
  };

  return (
    <DataProvider
      value={{
        data,
        dataCount,
        speed,
        timer,
        sort,
        selectedAlgorithm,
        handleStart,
        handleChangeDataCount,
        handleChangeSpeed,
        handleSetSelectedAlgorithm,
      }}
    >
      <Fragment>
        <NavBar title={title} />
        <main>
          <Switch>
            <Route exact path={baseRoute} component={() => <HomePage />} />
            <Route
              path={`${baseRoute}/searching`}
              render={(props) => <SearchingPage {...props} />}
            />
            <Route
              path={`${baseRoute}/sorting`}
              render={(props) => <SortingPage {...props} />}
            />
            <Redirect from={`${baseRoute}/*`} to={baseRoute} />
          </Switch>
        </main>
        )
      </Fragment>
    </DataProvider>
  );
}

export default App;
