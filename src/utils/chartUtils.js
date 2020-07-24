export const record = (data, pNodes, sNodes, snapshots) => {
  const d = [...data];
  const primaryNodes = _getFocusNodeIds(pNodes, data);
  const secondaryNodes = _getFocusNodeIds(sNodes, data);
  const name = `Pass #${snapshots.length}`;
  const record = [
    {
      name,
      data: d,
      primaryNodes,
      secondaryNodes,
    },
  ];
  return [...snapshots, ...record];
};

const _getFocusNodeIds = (nodes, data) => {
  return nodes.map((nodeIndex) => data[nodeIndex]._id);
};

export const mapChartData = (snapshots) => {
  return snapshots.map((iter) => {
    let x = 0;
    const { name, data } = iter;
    const snapshot = data.map(({ _id, y }) => {
      return {
        _id: _id,
        x: x++,
        y: y,
        size: y,
        color: _getColor(_id, iter),
        opacity: _getOpacity(_id, iter),
      };
    });
    return { name, data: snapshot };
  });
};

const _getOpacity = (_id, iter) => {
  const nodes = [...iter.primaryNodes, ...iter.secondaryNodes];
  return nodes.includes(_id) ? 1 : 0.7;
};

const _getColor = (_id, iter) => {
  const { primaryNodes, secondaryNodes } = iter;
  //red
  if (primaryNodes.includes(_id)) return 2;
  //blue
  else if (secondaryNodes.includes(_id)) return 1.25;
  else return 0.5; // orange
};
