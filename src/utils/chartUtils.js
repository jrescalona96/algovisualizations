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

export default { mapChartData };
