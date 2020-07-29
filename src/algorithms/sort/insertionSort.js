import { swap } from "../../utils/sortUtils";
import { record } from "../../utils/chartUtils";
import _ from "lodash";

let snapshots;

export const insertionSort = (nums) => {
  let data = [...nums];
  snapshots = [];
  _insertionSort(data);
  snapshots = record(data, [], _.range(0, data.length), snapshots);
  return { data, snapshots };
};

const _insertionSort = (data) => {
  snapshots = record(data, [], [], snapshots);
  for (let i = 1; i < data.length; i++) {
    snapshots = record(data, [], [i], snapshots);
    for (let j = i; j > 0; j--) {
      if (data[j].y < data[j - 1].y) {
        snapshots = record(data, [j], [i, j - 1], snapshots);
        data = swap(data, j, j - 1);
        snapshots = record(data, [j - 1], [i, j], snapshots);
      }
    }
  }
};
