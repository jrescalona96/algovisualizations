import { recordSnapshot } from "../../utils/snapshotUtils";
import { swap } from "../../utils/sortUtils";
import _ from "lodash";

let snapshots;

export const mergeSort = (workingData) => {
  snapshots = [];
  let data = [...workingData];
  _mergeSort(data, 0, data.length - 1);
  recordSnapshot(data, [], _.range(0, data.length), snapshots);
  return { data, snapshots };
};

const _mergeSort = (data, start, end) => {
  const size = end - start + 1;
  const mid = Math.floor(start + (end - start + 1) / 2);
  recordSnapshot(data, [mid], [], snapshots);
  if (size > 2) {
    _mergeSort(data, start, mid);
    _mergeSort(data, mid + 1, end);
    _merge(data, start, mid, mid + 1, end);
    recordSnapshot(data, [], _.range(start, end + 1), snapshots);
  } else if (size === 2) {
    recordSnapshot(data, [start, end], [], snapshots);
    if (data[start].y > data[end].y) swap(data, start, end);
    recordSnapshot(data, [start], [end], snapshots);
  }
};

const _merge = (data, leftStart, leftEnd, rightStart, rightEnd) => {
  let temp = [];
  let leftCurrent = leftStart;
  let rightCurrent = rightStart;
  let index = 0;

  while (leftCurrent <= leftEnd && rightCurrent <= rightEnd) {
    if (data[leftCurrent].y < data[rightCurrent].y) {
      temp[index] = data[leftCurrent];
      recordSnapshot(
        data,
        [leftCurrent, rightCurrent],
        _.range(leftStart, rightEnd + 1),
        snapshots
      );
      leftCurrent++;
    } else {
      recordSnapshot(
        data,
        [leftCurrent, rightCurrent],
        _.range(leftStart, rightEnd + 1),
        snapshots
      );
      temp[index] = data[rightCurrent];
      rightCurrent++;
    }
    index++;
  }

  temp = [
    ...temp,
    ...data.slice(leftCurrent, leftEnd + 1),
    ...data.slice(rightCurrent, rightEnd + 1),
  ];

  index = leftStart;
  for (let i = 0; i < temp.length; i++) {
    data[index] = temp[i];
    recordSnapshot(data, [index], _.range(leftStart, rightEnd + 1), snapshots);
    index++;
  }
};
