import React, { useRef } from 'react';
import ReactDOMServer from 'react-dom/server';
import * as THREE from 'three';
import ForceGraph3D from 'react-force-graph-3d';
import ActorMetadata from './ActorMetadata';

const ActorGraph = ({ data, setData, metadata }) => {
  const fgRef = useRef();
  const handleNodeHover = node => {};

  return (
    <ForceGraph3D
      ref={fgRef}
      enableNodeDrag
      linkColor="color"
      linkWidth={2}
      nodeThreeObject={({ img }) => {
        const imgTexture = new THREE.TextureLoader().load(`datasets/${img}`);
        const material = new THREE.SpriteMaterial({ map: imgTexture });
        const sprite = new THREE.Sprite(material);
        sprite.scale.set(12, 12);
        return sprite;
      }}
      nodeLabel={({ img }) =>
        ReactDOMServer.renderToStaticMarkup(
          <ActorMetadata
            name={metadata[img].name}
            budget={metadata[img].budget}
            revenue={metadata[img].revenue}
          />
        )
      }
      onNodeHover={handleNodeHover}
      graphData={data}
    />
  );
};

export default ActorGraph;
