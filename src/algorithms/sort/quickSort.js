import { swap } from "../../utils/sortUtils";
import { recordSnapshot } from "../../utils/snapshotUtils";
import _ from "lodash";

let snapshots = [];
export const quickSort = (workingData) => {
  snapshots = [];
  let data = [...workingData];
  _quickSort(data, 0, data.length - 1);
  recordSnapshot(data, [], _.range(0, data.length), snapshots);
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
    recordSnapshot(data, [pivotIndex], [start, end], snapshots);
    while (data[start].y < pivot.y) {
      start++;
      recordSnapshot(data, [pivotIndex], [start, end], snapshots);
    }
    while (data[end].y > pivot.y) {
      end--;
      recordSnapshot(data, [pivotIndex], [start, end], snapshots);
    }
    if (start <= end) {
      recordSnapshot(data, [pivotIndex], [start, end], snapshots);
      swap(data, start, end);
      pivotIndex = data.indexOf(pivot);
      start++;
      recordSnapshot(data, [pivotIndex], [start, end], snapshots);
      end--;
    }
  }
  return start;
};
