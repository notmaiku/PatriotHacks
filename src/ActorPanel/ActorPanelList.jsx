import React from 'react';

const actors = ['Adam Sandler', 'Brad Pitt', 'Tom Cruise', 'Tom Hanks'];
const ActorPanelList = () => actors.map((actor) => <li key={Math.random()}><p>{actor}</p></li>);

export default ActorPanelList;
