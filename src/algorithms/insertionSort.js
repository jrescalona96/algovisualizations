import { swap } from "../utils/sortUtils";
import { record } from "../utils/chartUtils";

let snapshots = [];

export const insertionSort = (nums) => {
  let data = [...nums];
  snapshots = record(data, data, snapshots);
  for (let i = 1; i < data.length; i++)
    for (let j = i; j > 0; j--) {
      if (data[j].y < data[j - 1].y) {
        data = swap(data, j, j - 1);
      }
      snapshots = record(data, [data[i], data[j], data[j - 1]], snapshots);
    }
  return { data, snapshots };
};
