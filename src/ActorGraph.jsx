import React, { useEffect } from 'react';
import * as THREE from 'three';
import ForceGraph3D from '3d-force-graph';

const ActorGraph = () => {
  useEffect(() => {
    const elem = document.getElementById('3d-graph');
    const imgs = ['asandler.jpg', 'bpitt.jpg', 'tcruise.jpg', 'thanks.jpg'];
    // Random connected graph
    const gData = {
      nodes: imgs.map((img, id) => ({ id, img })),
      links: [...Array(imgs.length).keys()]
        .filter((id) => id)
        .map((id) => ({
          source: id,
          target: Math.round(Math.random() * (id - 1)),
        })),
    };

    ForceGraph3D()(elem)
      .nodeThreeObject(({ img }) => {
        // use a sphere as a drag handle
        const obj = new THREE.Mesh(
          new THREE.SphereGeometry(7),
          new THREE.MeshBasicMaterial({
            depthWrite: false,
            transparent: true,
            opacity: 0,
          }),
        );
        // add img sprite as child
        const imgTexture = new THREE.TextureLoader().load(`datasets/${img}`);
        const material = new THREE.SpriteMaterial({ map: imgTexture });
        const sprite = new THREE.Sprite(material);
        sprite.scale.set(12, 12);
        obj.add(sprite);
        return obj;
      })
      // .onNodeHover((node) => {
      //   elem.style.cursor = node ? 'pointer' : null;
      // })
      // .onNodeClick((node) => {
      //   // Aim at node from outside it
      //   const distance = 40;
      //   const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);
      //   Graph.cameraPosition(
      //     {
      //       x: node.x * distRatio,
      //       y: node.y * distRatio,
      //       z: node.z * distRatio,
      //     }, // new position
      //     node, // lookAt ({ x, y, z })
      //     3000, // ms transition duration
      //   );
      // })
      .graphData(gData);
  }, []);

  return <div id="3d-graph" />;
};

export default ActorGraph;
