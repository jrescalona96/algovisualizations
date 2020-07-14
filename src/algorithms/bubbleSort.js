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
      snapshots = record(
        data,
        [data[current]._id, data[current + 1]._id],
        snapshots
      );
      if (data[current].y > data[current + 1].y) {
        data = swap(data, current, current + 1);
        sorted = false;
      }
      current++;
    }
    current = 0;
    end--;
  }
  return { data, snapshots };
};
