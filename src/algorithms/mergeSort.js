import { record } from "../utils/chartUtils";
import { swap } from "../utils/sortUtils";

let snapshots = [];
let data = [];

export const mergeSort = (nums) => {
  data = [...nums];
  _mergeSort(0, data.length - 1);
  snapshots = record(data, data, snapshots);
  return { data, snapshots };
};

const _mergeSort = (start, end) => {
  const size = end - start + 1;
  const mid = Math.floor(start + (end - start + 1) / 2);
  snapshots = record(data, [data[mid]], snapshots);
  if (size > 2) {
    _mergeSort(start, mid);
    _mergeSort(mid + 1, end);
    _merge(start, mid, mid + 1, end);
  } else if (size === 2) {
    if (data[start].y > data[end].y) swap(data, start, end);
  }
  snapshots = record(data, [data[mid]], snapshots);
  return;
};

const _merge = (leftStart, leftEnd, rightStart, rightEnd) => {
  let temp = [];
  let leftCurrent = leftStart;
  let rightCurrent = rightStart;
  let index = 0;

  while (leftCurrent <= leftEnd && rightCurrent <= rightEnd) {
    if (data[leftCurrent].y < data[rightCurrent].y) {
      snapshots = record(
        data,
        [data[leftCurrent], data[rightCurrent]],
        snapshots
      );
      temp[index] = data[leftCurrent];
      leftCurrent++;
    } else {
      snapshots = record(
        data,
        [data[leftCurrent], data[rightCurrent]],
        snapshots
      );
      temp[index] = data[rightCurrent];
      rightCurrent++;
    }
    index++;
  }

  // add remaining values
  temp = [
    ...temp,
    ...data.slice(leftCurrent, leftEnd + 1),
    ...data.slice(rightCurrent, rightEnd + 1),
  ];

  index = leftStart;
  for (let i = 0; i < temp.length; i++) {
    data[index] = temp[i];
    index++;
  }

  return;
};
