export const formatSnapshots = (snapshots) => {
  return snapshots.map((iter) => {
    let x = 0;
    const { data } = iter;
    const snapshot = data.map((item) => {
      let record = { ...item };
      record.x = x++;
      record.size = item.y;
      record.elevation = _getColor(item._id, iter);
      record.color = _getColor(item._id, iter);
      record.opacity = _getOpacity(item._id, iter);
      return record;
    });
    return { data: snapshot };
  });
};

export const recordSnapshot = (data, existingSnapshots, pNodes, sNodes) => {
  const newRecord = _createRecord(data, pNodes, sNodes);
  existingSnapshots.push(newRecord);
};

const _createRecord = (data, pNodes, sNodes) => {
  return {
    data: [...data],
    primaryNodes: _getFocusNodeIds(pNodes, data),
    secondaryNodes: _getFocusNodeIds(sNodes, data),
  };
};

const _getFocusNodeIds = (nodes, data) => {
  return nodes.map((nodeIndex) => data[nodeIndex]._id);
};

const _getOpacity = (_id, iter) => {
  const nodes = [...iter.primaryNodes, ...iter.secondaryNodes];
  return nodes.includes(_id) ? 1 : 0.5;
};

const _getColor = (_id, iter) => {
  const { primaryNodes, secondaryNodes } = iter;
  if (primaryNodes.includes(_id)) return 2;
  else if (secondaryNodes.includes(_id)) return 1;
  else return 0;
};
