import React, { useRef, useCallback } from 'react';
import * as THREE from 'three';
import ForceGraph3D from 'react-force-graph-3d';

const ActorGraph = ({ data, setData }) => {
  const fgRef = useRef();

  return (
    <ForceGraph3D
      ref={fgRef}
      enableNodeDrag
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
      graphData={data}
    />
  );
};

export default ActorGraph;
