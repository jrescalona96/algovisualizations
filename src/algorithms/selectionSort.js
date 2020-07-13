import { swap } from "../utils/sortUtils";
import { record } from "../utils/chartUtils";

export const selectionSort = (nums) => {
  let snapshots = [];
  let data = [...nums];
  let start = 0;
  let end = nums.length - 1;
  let minIdx = 0;

  while (start <= end) {
    minIdx = start;
    snapshots = record(data, [start, minIdx], snapshots);
    for (let i = start; i <= end; i++) {
      if (data[i].y < data[minIdx].y) minIdx = i;
    }
    swap(data, start, minIdx);
    start++;
  }

  return { data, snapshots };
};
