import React, { useContext } from "react";
import ControlsContext from "../../context/ControlsContext";
import AlgorithmsContext from "../../context/AlgorithmsContext";
import { Button } from "@material-ui/core";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";

function StartButton() {
  const { handleStart, timer } = useContext(ControlsContext);
  const { selectedAlgorithm } = useContext(AlgorithmsContext);
  const isTimerSet = timer > 0;

  const _isDisabled = () => !selectedAlgorithm._id;
  return (
    <Button
      disabled={_isDisabled()}
      variant="contained"
      color={isTimerSet ? "default" : "secondary"}
      onClick={handleStart}
      size="medium"
      startIcon={isTimerSet ? <SwapHorizIcon /> : <PlayCircleOutlineIcon />}
    >
      {isTimerSet ? "STOP" : "START"}
    </Button>
  );
}

export default StartButton;
