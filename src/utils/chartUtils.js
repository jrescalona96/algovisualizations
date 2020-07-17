export const record = (data, nodes, snapshots) => {
  const snapshot = [...data];
  const focusNodes = _getFocusNodes(nodes);
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
        size: data.y,
        color: iter.focusNodes.includes(data._id) ? 255 : 150,
        opacity: iter.focusNodes.includes(data._id) ? 1 : 0.5,
        stroke: { color: "black", width: 5 },
      };
    });
    return { name, snapshot };
  });
};

const _getFocusNodes = (data) => {
  return data.map((item) => item._id);
};
