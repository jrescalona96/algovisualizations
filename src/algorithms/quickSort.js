import { swap } from "../utils/sortUtils";
import { record } from "../utils/chartUtils";

let snapshots = [];
export const quickSort = (nums) => {
  snapshots = [];
  let data = [...nums];
  _quickSort(data, 0, data.length - 1);
  snapshots = record(data, data, snapshots);
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
  while (start <= end) {
    while (data[start].y < pivot.y) {
      start++;
      snapshots = record(data, [data[start], pivot, data[end]], snapshots);
    }
    while (data[end].y > pivot.y) {
      end--;
      snapshots = record(data, [data[start], pivot, data[end]], snapshots);
    }
    if (start <= end) {
      swap(data, start, end);
      snapshots = record(data, [data[start], pivot, data[end]], snapshots);
      start++;
      snapshots = record(data, [data[start], pivot, data[end]], snapshots);
      end--;
      snapshots = record(data, [data[start], pivot, data[end]], snapshots);
    }
  }
  return start;
};
