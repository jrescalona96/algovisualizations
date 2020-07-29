import { swap } from "../../utils/sortUtils";
import { record } from "../../utils/chartUtils";
import _ from "lodash";

let snapshots;

export const bubbleSort = (nums) => {
  let data = [...nums];
  snapshots = [];
  _bubbleSort(data);
  snapshots = record(data, [], _.range(data.length), snapshots);
  return { data, snapshots };
};

const _bubbleSort = (data) => {
  let curr = 0;
  let end = data.length - 1;
  let sorted = false;

  while (!sorted) {
    sorted = true;
    while (curr < end) {
      if (data[curr].y > data[curr + 1].y) {
        sorted = false;
        snapshots = record(data, [curr + 1], [curr], snapshots);
        data = swap(data, curr, curr + 1);
        snapshots = record(data, [curr], [curr + 1], snapshots);
      } else {
        snapshots = record(data, [], [curr, curr + 1], snapshots);
      }
      curr++;
    }
    curr = 0;
    end--;
  }
};
