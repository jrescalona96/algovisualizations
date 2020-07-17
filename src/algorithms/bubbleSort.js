import { swap } from "../utils/sortUtils";
import { record } from "../utils/chartUtils";

export const bubbleSort = (nums) => {
  let data = [...nums];
  let snapshots = [];
  let current = 0;
  let end = data.length - 1;
  let sorted = false;

  while (!sorted) {
    sorted = true;
    while (current < end) {
      snapshots = record(data, [data[current], data[current + 1]], snapshots);
      if (data[current].y > data[current + 1].y) {
        data = swap(data, current, current + 1);
        sorted = false;
      }
      current++;
    }
    current = 0;
    end--;
  }
  snapshots = record(data, data, snapshots);
  return { data, snapshots };
};
