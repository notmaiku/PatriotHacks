import React, { useState, useEffect } from 'react';

const Predicitions = ({ selectedActors }) => {
  const [budget, setBudget] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    let newBudget = 0;
    let newRevenue = 0;

    selectedActors.forEach(({ budget, revenue }) => {
      newBudget += budget;
      newRevenue += revenue;
    });

    setBudget(newBudget / selectedActors.length);
    setRevenue(newRevenue / selectedActors.length);
  }, [selectedActors]);

  return (
    <div>
      <h3>Movie Predictions</h3>
      <p>{`Budget: ${budget}`}</p>
      <p>{`Revenue: ${revenue}`}</p>
    </div>
  );
};

export default Predicitions;
