import React from 'react';

const Predicitions = ({ budget = '$5', revenue = '$10' }) => (
  <div>
    <h3>Result</h3>
    <p>{`Budget: ${budget}`}</p>
    <p>{`Revenue: ${revenue}`}</p>
  </div>
);

export default Predicitions;
