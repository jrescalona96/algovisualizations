import { swap } from "../../utils/sortUtils";
import { recordSnapshot } from "../../utils/snapshotUtils";
import _ from "lodash";

let snapshots;

export const insertionSort = (workingData) => {
  let data = [...workingData];
  snapshots = [];
  _insertionSort(data);
  recordSnapshot(data, [], _.range(0, data.length), snapshots);
  return { data, snapshots };
};

const _insertionSort = (data) => {
  recordSnapshot(data, [], [], snapshots);
  for (let i = 1; i < data.length; i++) {
    recordSnapshot(data, [], [i], snapshots);
    for (let j = i; j > 0; j--) {
      if (data[j].y < data[j - 1].y) {
        recordSnapshot(data, [j], [i, j - 1], snapshots);
        data = swap(data, j, j - 1);
        recordSnapshot(data, [j - 1], [i, j], snapshots);
      }
    }
  }
};
