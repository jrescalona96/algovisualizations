export const record = (data, pNodes, sNodes, snapshots) => {
  let update = [...snapshots];

  update.push({
    name: `Pass #${update.length}`,
    data: [...data],
    primaryNodes: _getFocusNodeIds(pNodes, data),
    secondaryNodes: _getFocusNodeIds(sNodes, data),
  });

  return update;
};

const _getFocusNodeIds = (nodes, data) => {
  return nodes.map((nodeIndex) => data[nodeIndex]._id);
};

export const mapChartData = async (snapshots) => {
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
  return nodes.includes(_id) ? 1 : 0.5;
};

const _getColor = (_id, iter) => {
  const { primaryNodes, secondaryNodes } = iter;
  //red
  if (primaryNodes.includes(_id)) return 2;
  //blue
  else if (secondaryNodes.includes(_id)) return 1;
  else return 0; // orange
};
