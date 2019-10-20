import React from 'react';
import { convertToCurrency } from './utils';

const ActorMetadata = ({ name, budget, revenue }) => (
  <div>
    <div>{`Name: ${name}`}</div>
    <div>{`Average Budget: ${convertToCurrency(budget)}`}</div>
    <div>{`Average Revenue: ${convertToCurrency(revenue)}`}</div>
  </div>
);

export default ActorMetadata;
