import React, { useState, useEffect } from 'react';
import { convertToCurrency } from './utils';

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

    setBudget(
      (newBudget / selectedActors.length) * (Math.random() * (1 - 0.4) + 0.4),
    );
    setRevenue(
      (newRevenue / selectedActors.length) * (Math.random() * (1 - 0.4) + 0.4),
    );
  }, [selectedActors]);

  return (
    <div>
      <h3>Movie Predictions</h3>
      <p>{`Budget: ${convertToCurrency(budget)}`}</p>
      <p>{`Revenue: ${convertToCurrency(revenue)}`}</p>
    </div>
  );
};

export default Predicitions;
