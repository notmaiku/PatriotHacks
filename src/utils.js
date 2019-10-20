const maxNodeSize = 50;

/**
 * Gives the coordinates of the border for keeping the nodes inside a frame
 * http://bl.ocks.org/mbostock/1129492
 */

export function nodeTransform(d) {
  d.x = Math.max(maxNodeSize, Math.min(w - (d.imgwidth / 2 || 16), d.x));
  d.y = Math.max(maxNodeSize, Math.min(h - (d.imgheight / 2 || 16), d.y));
  return `translate(${d.x},${d.y})`;
}

/**
 * Toggle children on click.
 */

export function click(d) {
  if (d.children) {
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    d._children = null;
  }

  update();
}

/**
 * Returns a list of all nodes under the root.
 */

export function flatten(root) {
  const nodes = [];
  let i = 0;

  function recurse(node) {
    if (node.children) node.children.forEach(recurse);
    if (!node.id) node.id = ++i;
    nodes.push(node);
  }

  recurse(root);
  return nodes;
}
