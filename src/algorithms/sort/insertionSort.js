import { swap } from "../../utils/algorithmUtils";
import { recordSnapshot } from "../../utils/snapshotUtils";
import _ from "lodash";

let snapshots;

export const insertionSort = (workingData) => {
  let data = [...workingData];
  snapshots = [];
  _insertionSort(data);
  recordSnapshot(data, snapshots, [], _.range(0, data.length));
  return { data, snapshots };
};

const _insertionSort = (data) => {
  recordSnapshot(data, snapshots, [], []);
  for (let i = 1; i < data.length; i++) {
    recordSnapshot(data, snapshots, [], [i]);
    for (let j = i; j > 0; j--) {
      if (data[j].y < data[j - 1].y) {
        recordSnapshot(data, snapshots, [j], [i, j - 1]);
        swap(data, j, j - 1);
        recordSnapshot(data, snapshots, [j - 1], [i, j]);
      }
    }
  }
};
