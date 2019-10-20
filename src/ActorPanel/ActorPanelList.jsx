import React, { useState, useEffect } from 'react';

const ActorPanelList = ({
  actors,
  actorsView,
  addActor,
  nodes,
  removeActor
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
      <li
        key={Math.random()}
        className="actorRow"
        onClick={() => {
          if (isShown) {
            removeActor(image, idx, actorNodes[name]);
          } else {
            addActor({ name, image }, idx, actorNodes[name]);
          }
        }}
      >
        <div className="actorName">
          {name}
          <span className="actorAction">{isShown ? 'x' : '+'}</span>
        </div>
      </li>
    );
  });
};

export default ActorPanelList;
