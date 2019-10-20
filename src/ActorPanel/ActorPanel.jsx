import React, { useCallback, useEffect } from 'react';
import ActorPanelList from './ActorPanelList';
import SearchBar from '../SearchBar';
import useFilter from '../hooks/useFilter';
import { createGraphData } from '../utils';
import Predictions from '../Predictions';

const ActorPanel = ({ data, setData }) => {
  const [
    actors,
    setActors,
    actorsView,
    setActorsView,
    filterActors,
  ] = useFilter([], []);

  useEffect(() => {
    // Mock fetch call for all actors
    console.log('fetching...');
    const allActors = ['Adam Sandler', 'Brad Pitt', 'Tom Cruise', 'Tom Hanks'];
    setActors(allActors);
    setActorsView(allActors.map((_, idx) => idx));
  }, []);

  const addActor = (actorName) => {
    const { nodes, links } = data;
    const { nodes: newNodes, links: newLinks } = createGraphData(
      [`${actorName}.jpg`],
      nodes,
      links,
    );
    setData({ nodes: newNodes, links: newLinks });
  };

  const dragStart = Event => {
        const target= Event.target;
        setTimeout(() => {
            target.style.display = "none";
        }, 0);
    }

    const dragOver = Event => {
        Event.stopPropagation();
    }
  return (
    <div className="panel">
      <div id="header">
        <h1>Add Actors</h1>
        <div id="expandButton" />
      </div>
      <div id="panelScrim" />
      <div id="contentWrapper">
        <button onClick={() => addActor('cat')}>Add</button>
        <SearchBar onChange={filterActors} />
        <ActorPanelList actors={actors} actorsView={actorsView} onDrag={dragStart} onDragOver={dragOver}/>
        <Predictions/>
      </div>
    </div>
  );
};

export default ActorPanel;
