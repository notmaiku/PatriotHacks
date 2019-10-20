import React, { useRef, useCallback } from 'react';
import * as THREE from 'three';
import ActorPanel, {addActor} from './ActorPanel';
import ForceGraph3D from 'react-force-graph-3d';

const ActorGraph = ({ data, setData }) => {
  const fgRef = useRef();

  const handleClick = (node) => {
    const { nodes, links } = data;
    // Remove node on click
    const newLinks = links.filter((l) => l.source !== node && l.target !== node); // Remove links attached to node
    const newNodes = nodes.slice();
    newNodes.splice(node.id, 1); // Remove node
    newNodes.forEach((n, idx) => {
      n.id = idx;
    }); // Reset node ids to array index
    setData({ nodes: newNodes, links: newLinks });
  };

  const drop = Event => {
    Event.preventDefault();
    const actorID = Event.dataTransfer.getData('actorID');
    const actor = document.getElementByID(actorID);
    actor.style.display = 'block';
    ActorPanel.addActor('cat');
  };

  const dragOver = Event => {
    Event.preventDefault();
  };

  return (
    <ForceGraph3D
      ref={fgRef}
      enableNodeDrag={false}
      nodeThreeObject={({ img }) => {
        const imgTexture = new THREE.TextureLoader().load(`datasets/${img}`);
        const material = new THREE.SpriteMaterial({ map: imgTexture });
        const sprite = new THREE.Sprite(material);
        sprite.scale.set(12, 12);
        return sprite;
      }}
      onNodeHover={(node) => {
        // elem.style.cursor = node ? 'pointer' : null;
      }}
      onNodeClick={handleClick}
      graphData={data}
      onDragOver={dragOver}
      onDrop={drop}
    />
  );
};

export default ActorGraph;
