import { swap } from "../../utils/sortUtils";
import { recordSnapshot } from "../../utils/snapshotUtils";
import _ from "lodash";

let snapshots;

export const bubbleSort = (workingData) => {
  let data = [...workingData];
  snapshots = [];
  _bubbleSort(data);
  recordSnapshot(data, snapshots, [], _.range(data.length));
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
        recordSnapshot(data, snapshots, [curr + 1], [curr]);
        swap(data, curr, curr + 1);
        recordSnapshot(data, snapshots, [curr], [curr + 1]);
      } else {
        recordSnapshot(data, snapshots, [], [curr, curr + 1]);
      }
      curr++;
    }
    curr = 0;
    end--;
  }
};
