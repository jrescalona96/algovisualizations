import { swap } from "../../utils/sortUtils";
import { record } from "../../utils/chartUtils";
import _ from "lodash";

let snapshots;

export const selectionSort = (nums) => {
  snapshots = [];
  let data = [...nums];
  data.length < 100 ? _selectionSortSmall(data) : _selectionSortLarge(data);
  snapshots = record(data, [], _.range(0, data.length), snapshots);
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
      snapshots = record(data, [minIdx], [i, start], snapshots);
    }
    data = swap(data, start, minIdx);
    start++;
  }
};

const _selectionSortLarge = (data) => {
  let start = 0;
  let end = data.length - 1;
  let minIdx = 0;

  while (start <= end) {
    snapshots = record(data, [minIdx], [start], snapshots);
    minIdx = start;
    for (let i = start; i <= end; i++) {
      if (data[i].y < data[minIdx].y) {
        minIdx = i;
      }
    }
    data = swap(data, start, minIdx);
    start++;
  }
};
