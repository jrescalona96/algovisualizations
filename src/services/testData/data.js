export function generateData(totalCount) {
  const data = [];
  var count = 0;
  while (count < totalCount) {
    const _id = "_" + Math.random().toString(36).substr(2, 9);
    const y = Math.floor(Math.random() * Math.floor(totalCount * 2)) + 1;
    const x = count++;
    const size = y;
    const color = 0;
    const opacity = 0.8;
    const elevation = 1;
    data.push({ _id, x, y, size, color, opacity, elevation });
  }

  return data;
}

export default {
  generateData,
};
