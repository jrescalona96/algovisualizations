export function generateData(totalCount) {
  const data = [];
  var count = 0;

  while (count < totalCount) {
    const _id = "_" + Math.random().toString(36).substr(2, 9);
    const y = Math.floor(Math.random() * Math.floor(totalCount)) + 1;
    const x = count++;
    data.push({ _id, x, y });
  }

  return data;
}

export default {
  generateData,
};
