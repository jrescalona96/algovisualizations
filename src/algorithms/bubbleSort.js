import { record, swap } from "../utils/sortUtils";
import { mapChartData } from "../utils/chartUtils";

export const bubbleSort = (nums) => {
  const data = [...nums];
  let snapshots = [];
  let current = 0;
  let end = data.length - 1;
  let sorted = false;

  while (!sorted) {
    sorted = true;
    while (current < end) {
      snapshots = record(data, [current, current + 1], snapshots);
      if (data[current].y > data[current + 1].y) {
        swap(data, current, current + 1);
        sorted = false;
      }
      current++;
    }
    current = 0;
    end--;
  }
  return mapChartData(snapshots);
};
