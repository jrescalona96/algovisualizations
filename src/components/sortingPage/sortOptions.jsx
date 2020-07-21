import React from "react";
import CustomSlider from "../common/customSlider";

function SortOptions({
  onChangeSpeed,
  speed,
  dataCount,
  onChangeDataCount,
  onSetDataCount,
}) {
  const maxSpeed = 3000;
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
        buttonLabel="Reset"
      />
    </React.Fragment>
  );
}

export default SortOptions;
