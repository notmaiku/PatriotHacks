import React from 'react';

const ActorMetadata = ({ name, budget, revenue }) => (
  <div>
    <div>{`Name: ${name}`}</div>
    <div>{`Average Budget: ${budget}`}</div>
    <div>{`Average Revenue: ${revenue}`}</div>
  </div>
);

export default ActorMetadata;
