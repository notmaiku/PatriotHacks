import React from 'react';

const ActorPanelList = ({ actors, actorsView }) => actorsView.map((idx) => <div key={Math.random()}>{actors[idx]}</div>);

export default ActorPanelList;
