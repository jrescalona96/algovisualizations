const _swap = (nums, idx1, idx2) => {
  let temp = nums[idx1];
  nums[idx1] = nums[idx2];
  nums[idx2] = temp;
};

export const formatIterations = (iterations) => {
  const formattedIterations = iterations.map((iter) => {
    let x = -1;
    const formattedInfo = iter.info.map((data) => {
      x++;
      return {
        _id: data._id,
        x: x,
        y: data.y,
        color: iter.focus.includes(data._id) ? 100 : data.y,
        size: data.y * 2,
        opacity: data.y,
      };
    });
    return { name: iter.name, info: formattedInfo };
  });
  return formattedIterations;
};

export const bubbleSort = (nums) => {
  let data = [...nums];
  let current = 0;
  let end = data.length - 1;
  let sorted = false;
  let iterationCount = 1;
  let iterations = [
    {
      name: `Pass #${iterationCount}`,
      info: [...data],
      focus: [data[current]._id, data[current + 1]._id],
    },
  ];
  while (!sorted) {
    sorted = true;
    while (current < end) {
      iterationCount++;
      iterations.push({
        name: `Pass #${iterationCount}`,
        info: [...data],
        focus: [data[current]._id, data[current + 1]._id],
      });

      if (data[current].y > data[current + 1].y) {
        _swap(data, current, current + 1);
        sorted = false;
      }
      current++;
    }
    current = 0;
  }
  return formatIterations(iterations);
};

export default { bubbleSort };
