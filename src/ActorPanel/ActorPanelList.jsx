import React from 'react';

<<<<<<< HEAD
const actors = ['Adam Sandler', 'Brad Pitt', 'Tom Cruise', 'Tom Hanks'];
const ActorPanelList = () => actors.map((actor) => <li key={Math.random()}><p>{actor}</p></li>);
=======
const ActorPanelList = ({ actors, actorsView }) => actorsView.map((idx) => <div key={Math.random()}>{actors[idx]}</div>);
>>>>>>> 86f78d61ba4023d06f0c5a92c4d5ce87d1e8c5cf

export default ActorPanelList;
