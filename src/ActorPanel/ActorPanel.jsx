import React from 'react';
import ActorPanelList from './ActorPanelList';
import SearchBar from '../SearchBar';
import useFilter from '../hooks/useFilter';
import { createGraphData, removeNode } from '../utils';
import Predictions from '../Predictions';

const ActorPanel = ({
 defaultActors, defaultActorsView, data, setData 
}) => {
  const [, , actorsView, setActorsView, filterActors] = useFilter(
    defaultActors,
    defaultActorsView,
  );

  const addActor = (actor, idx) => {
    const { nodes, links } = data;
    const { nodes: newNodes, links: newLinks } = createGraphData(
      [actor],
      nodes,
      links,
    );
    setData({ nodes: newNodes, links: newLinks });
    setActorsView([...actorsView, idx]);
  };

  const removeActor = (actorImageFile, idx, node) => {
    const { nodes, links } = data;
    const { nodes: newNodes, links: newLinks } = removeNode(node, links, nodes);
    setData({ nodes: newNodes, links: newLinks });
    setActorsView(actorsView.filter((actorIdx) => actorIdx !== idx));
  };

  return (
    <div className="panel">
      <div id="header">
        <h1>Movie Logistics Predictor (MLP)</h1>
        <div id="expandButton" />
      </div>
      <div id="panelScrim" />
      <div id="contentWrapper">
        <SearchBar onChange={filterActors} />
        <ActorPanelList
          actors={defaultActors}
          actorsView={actorsView}
          addActor={addActor}
          nodes={data.nodes}
          removeActor={removeActor}
        />
        <Predictions
          selectedActors={actorsView.map((idx) => defaultActors[idx])}
        />
      </div>
    </div>
  );
};

export default ActorPanel;
