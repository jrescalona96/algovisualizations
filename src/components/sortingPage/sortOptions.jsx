import React from "react";
import CustomSlider from "../common/customSlider";

function SortOptions({
  onChangeSpeed,
  speed,
  dataCount,
  onChangeDataCount,
  onSetDataCount,
}) {
  const maxSpeed = 1000;
  const maxDataCount = 300;
  return (
    <React.Fragment>
      <CustomSlider
        title="Visualization Speed"
        maxValue={maxSpeed}
        onChange={onChangeSpeed}
        value={speed}
      />
      <CustomSlider
        title="Data Set Count"
        maxValue={maxDataCount}
        onChange={onChangeDataCount}
        onSubmit={onSetDataCount}
        value={dataCount}
        buttonName="Start"
      />
    </React.Fragment>
  );
}

export default SortOptions;
