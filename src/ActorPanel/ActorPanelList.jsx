import React, { useState, useEffect } from 'react';

const ActorPanelList = ({
  actors,
  actorsView,
  addActor,
  nodes,
  removeActor,
}) => {
  const [actorNodes, setActorNodes] = useState({});

  useEffect(() => {
    const newActorNodes = {};
    actors.forEach(({ name, image }) => {
      newActorNodes[name] = nodes.find(({ img }) => img === image);
    });
    setActorNodes(newActorNodes);
  }, [actorsView, nodes]);

  return actors.map(({ name, image }, idx) => {
    const isShown = actorsView.includes(idx);
    return (
      <li key={Math.random()}>
        <p>{name}</p>
        <button
          type="button"
          onClick={() => {
            if (isShown) {
              removeActor(image, idx, actorNodes[name]);
            } else {
              addActor({ name, image }, idx, actorNodes[name]);
            }
          }}
        >
          {isShown ? 'Remove' : 'Add'}
        </button>
      </li>
    );
  });
};

export default ActorPanelList;
