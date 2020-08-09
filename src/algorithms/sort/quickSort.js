import { swap } from "../../utils/sortUtils";
import { recordSnapshot } from "../../utils/snapshotUtils";
import _ from "lodash";

let snapshots = [];
export const quickSort = (workingData) => {
  snapshots = [];
  let data = [...workingData];
  _quickSort(data, 0, data.length - 1);
  recordSnapshot(data, snapshots, [], _.range(0, data.length));
  return { data, snapshots };
};

const _quickSort = (data, start, end) => {
  if (start >= end) {
    return;
  } else {
    const pivot = data[Math.floor((start + end) / 2)];
    const index = _partition(data, start, end, pivot);
    _quickSort(data, start, index - 1);
    _quickSort(data, index, end);
  }
};

const _partition = (data, start, end, pivot) => {
  let pivotIndex = data.indexOf(pivot);
  while (start <= end) {
    pivotIndex = data.indexOf(pivot);
    recordSnapshot(data, snapshots, [pivotIndex], [start, end]);
    while (data[start].y < pivot.y) {
      start++;
      recordSnapshot(data, snapshots, [pivotIndex], [start, end]);
    }
    while (data[end].y > pivot.y) {
      end--;
      recordSnapshot(data, snapshots, [pivotIndex], [start, end]);
    }
    if (start <= end) {
      recordSnapshot(data, snapshots, [pivotIndex], [start, end]);
      swap(data, start, end);
      pivotIndex = data.indexOf(pivot);
      start++;
      recordSnapshot(data, snapshots, [pivotIndex], [start, end]);
      end--;
    }
  }
  return start;
};
