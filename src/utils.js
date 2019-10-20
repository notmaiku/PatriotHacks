export const createGraphData = (
  images,
  currentNodes = [],
  currentLinks = [],
) => {
  const nodeIdx = currentNodes.length;
  const nodes = [
    ...currentNodes,
    ...images.map(({ image }, id) => ({ id: id + nodeIdx, img: image })),
  ];
  const links = [
    ...currentLinks,
    ...[...Array(nodes.length).keys()]
      .filter((id) => id)
      .map((id) => ({
        img: nodes[id].img,
        source: id,
        target: Math.round(Math.random() * (id - 1)),
      })),
  ];

  return {
    nodes,
    links,
  };
};

export const removeNode = (node, currentLinks = [], currentNodes = []) => {
  const links = currentLinks.filter(
    (link) => link.source !== node && link.target !== node,
  ); // Remove links attached to node
  const nodes = currentNodes.slice();
  nodes.splice(node.id, 1); // Remove node
  nodes.forEach((n, idx) => {
    n.id = idx;
  }); // Reset node ids to array index

  return {
    nodes,
    links,
  };
};
