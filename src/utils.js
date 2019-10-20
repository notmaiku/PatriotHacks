export const createGraphData = (
  images,
  currentNodes = [],
  currentLinks = [],
) => {
  const nodeIdx = currentNodes.length;
  const nodes = [
    ...currentNodes,
    ...images.map((img, id) => ({ id: id + nodeIdx, img })),
  ];
  const links = [
    ...currentLinks,
    ...[...Array(nodes.length).keys()]
      .filter((id) => id)
      .map((id) => ({
        source: id,
        target: Math.round(Math.random() * (id - 1)),
      })),
  ];

  return {
    nodes,
    links,
  };
};
