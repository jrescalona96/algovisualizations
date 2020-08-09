import { swap } from "../../utils/sortUtils";
import { recordSnapshot } from "../../utils/snapshotUtils";
import _ from "lodash";

let snapshots;

export const bubbleSort = (workingData) => {
  let data = [...workingData];
  snapshots = [];
  _bubbleSort(data);
  recordSnapshot(data, [], _.range(data.length), snapshots);
  return { data, snapshots };
};

const _bubbleSort = (data) => {
  let curr = 0;
  let end = data.length - 1;
  let sorted = false;
  while (!sorted) {
    sorted = true;
    while (curr < end) {
      if (data[curr].y > data[curr + 1].y) {
        sorted = false;
        recordSnapshot(data, [curr + 1], [curr], snapshots);
        data = swap(data, curr, curr + 1);
        recordSnapshot(data, [curr], [curr + 1], snapshots);
      } else {
        recordSnapshot(data, [], [curr, curr + 1], snapshots);
      }
      curr++;
    }
    curr = 0;
    end--;
  }
};
