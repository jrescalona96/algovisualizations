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
    const snapshot = data.map((item) => {
      let record = { ...item };
      record.x = x++;
      record.size = item.y;
      record.elevation = _getColor(item._id, iter);
      record.color = _getColor(item._id, iter);
      record.opacity = _getOpacity(item._id, iter);
      return record;
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
