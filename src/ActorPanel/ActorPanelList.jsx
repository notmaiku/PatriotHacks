import React from 'react';

const ActorPanelList = ({ actors, actorsView }) => actorsView.map((idx) => <li key={Math.random()}><p id={actors[idx]} draggable={true}>{actors[idx]}</p></li>);

    
export default ActorPanelList;
