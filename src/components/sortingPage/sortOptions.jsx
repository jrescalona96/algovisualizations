import React from "react";
import CustomSlider from "../common/customSlider";

function SortOptions({
  onChangeSpeed,
  speed,
  dataCount,
  onChangeDataCount,
  onSetDataCount,
}) {
  const maxDataCount = 300;
  const formattedSpeed = (speed / 1000).toFixed(1);
  const maxSpeed = 3000;
  return (
    <React.Fragment>
      <CustomSlider
        title="Visualization Speed"
        label={formattedSpeed}
        maxValue={maxSpeed}
        onChange={onChangeSpeed}
        value={speed}
        unit="s"
      />
      <CustomSlider
        title="Data Count"
        maxValue={maxDataCount}
        onChange={onChangeDataCount}
        onSubmit={onSetDataCount}
        value={dataCount}
        buttonLabel="Reset"
      />
    </React.Fragment>
  );
}

export default SortOptions;
