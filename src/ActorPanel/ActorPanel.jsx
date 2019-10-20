import React, { useEffect } from 'react';
import ActorPanelList from './ActorPanelList';
import SearchBar from '../SearchBar';
import useFilter from '../hooks/useFilter';

const ActorPanel = () => {
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

  return (
    <div className="panel">
      <div id="header">
        <h1>Add Actors</h1>
        <div id="expandButton" />
      </div>
      <div id="panelScrim" />
      <div id="contentWrapper">
        <SearchBar onChange={filterActors} />
        <ActorPanelList actors={actors} actorsView={actorsView} />
      </div>
    </div>
  );
};

export default ActorPanel;
