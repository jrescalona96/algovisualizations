const _swap = (nums, idx1, idx2) => {
  let temp = nums[idx1];
  nums[idx1] = nums[idx2];
  nums[idx2] = temp;
};

export const mapChartData = (snapshots) => {
  return snapshots.map((iter) => {
    let x = 0;
    const name = iter.name;
    const snapshot = iter.snapshot.map((data) => {
      return {
        _id: data._id,
        x: x++,
        y: data.y,
        color: data.x,
        size: data.y,
        opacity: data.y,
      };
    });
    return { name, snapshot };
  });
};

let snapshots = [];
const _record = (data, nodes) => {
  const snapshot = [...data];
  const focusNodes = [...nodes];
  const name = `Pass #${snapshots.length}`;
  snapshots.push({
    name,
    snapshot,
    focusNodes,
  });
};

export const bubbleSort = (nums) => {
  snapshots = [];
  const data = [...nums];

  let current = 0;
  let end = data.length - 1;
  let sorted = false;

  while (!sorted) {
    sorted = true;
    while (current < end) {
      _record(data, [current, current + 1]);
      if (data[current].y > data[current + 1].y) {
        _swap(data, current, current + 1);
        sorted = false;
      }
      current++;
    }
    current = 0;
    end--;
  }
  return mapChartData(snapshots);
};

export default { bubbleSort };
