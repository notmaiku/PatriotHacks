import React from 'react';
import ActorPanelList from './ActorPanelList';
import SearchBar from '../SearchBar';

const ActorPanel = () => (
  <div className="panel">
    <div id="header">
      <h1>Add Actors</h1>
      <div id="expandButton" />
    </div>
    <div id="panelScrim" />
    <div id="contentWrapper">
      <SearchBar />
      <ActorPanelList />
    </div>
  </div>
);

export default ActorPanel;
