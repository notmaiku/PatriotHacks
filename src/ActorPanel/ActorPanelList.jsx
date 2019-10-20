import React from 'react';

const actors = ['Adam Sandler', 'Brad Pitt', 'Tom Cruise', 'Tom Hanks'];
const ActorPanelList = () => actors.map((actor) => <div key={Math.random()}>{actor}</div>);

export default ActorPanelList;
