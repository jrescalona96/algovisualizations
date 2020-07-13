export const record = (data, nodes, snapshots) => {
  const snapshot = [...data];
  const focusNodes = [...nodes];
  const name = `Pass #${snapshots.length}`;
  const record = [
    {
      name,
      snapshot,
      focusNodes,
    },
  ];
  return [...snapshots, ...record];
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
