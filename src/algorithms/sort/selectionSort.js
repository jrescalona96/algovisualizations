import { swap } from "../../utils/sortUtils";
import { recordSnapshot } from "../../utils/snapshotUtils";
import _ from "lodash";

let snapshots;

export const selectionSort = (workingData) => {
  snapshots = [];
  let data = [...workingData];
  data.length <= 300 ? _selectionSortSmall(data) : _selectionSortLarge(data);
  recordSnapshot(data, snapshots, [], _.range(0, data.length));
  return { data, snapshots };
};

const _selectionSortSmall = (data) => {
  let start = 0;
  let end = data.length - 1;
  let minIdx = 0;
  while (start <= end) {
    minIdx = start;
    for (let i = start; i <= end; i++) {
      if (data[i].y < data[minIdx].y) minIdx = i;
      recordSnapshot(data, snapshots, [minIdx], [i, start]);
    }
    swap(data, start, minIdx);
    start++;
  }
};

const _selectionSortLarge = (data) => {
  let start = 0;
  let end = data.length - 1;
  let minIdx = 0;

  while (start <= end) {
    recordSnapshot(data, snapshots, [minIdx], [start]);
    minIdx = start;
    for (let i = start; i <= end; i++) {
      if (data[i].y < data[minIdx].y) {
        minIdx = i;
      }
    }
    swap(data, start, minIdx);
    start++;
  }
};
