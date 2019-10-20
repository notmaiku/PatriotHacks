import React, { useEffect, useState } from 'react';
import ActorPanel from './ActorPanel/ActorPanel';
import ActorGraph from './ActorGraph';
import { createGraphData } from './utils';

const actors = [
  {
    name: 'Adam Sandler',
    image: 'asandler.jpg',
    budget: 11000000,
    revenue: 326502140.84577525,
  },
  {
    name: 'Brad Pitt',
    image: 'bpitt.jpg',
    budget: 65000000,
    revenue: 400372545.18268603,
  },
  {
    name: 'Daisy Ridley',
    image: 'dridley.jpg',
    budget: 245000000,
    revenue: 454509266.300978,
  },
  {
    name: 'Elizabeth Olsen',
    image: 'eolsen.jpg',
    budget: 80000000,
    revenue: 205470167.74550492,
  },
  {
    name: 'Emma Watson',
    image: 'ewatson.jpg',
    budget: 50000000,
    revenue: 155417844.2814721,
  },
  {
    name: 'Jennifer Lawrence',
    image: 'jlawrence.jpg',
    budget: 30000000,
    revenue: 613377931.5506063,
  },
  {
    name: 'Hugh Jackman',
    image: 'hjackman.jpg',
    budget: 50000000,
    revenue: 222496717.506394,
  },
  {
    name: 'Ryan Reynolds',
    image: 'rreynolds.jpg',
    budget: 11000000,
    revenue: 264544927.19378272,
  },
  {
    name: 'Scarlett Johansson',
    image: 'sjohansson.jpeg',
    budget: 967686,
    revenue: 222496717.506394,
  },
  {
    name: 'Tom Cruise',
    image: 'tcruise.jpg',
    budget: 66000000,
    revenue: 226288109.39823914,
  },
  {
    name: 'Tom Hanks',
    image: 'thanks.jpg',
    budget: 250000000,
    revenue: 98447365.10628588,
  },
];

const metadata = {};

actors.forEach(({
 name, image, budget, revenue 
}) => {
  metadata[image] = {
    name,
    budget,
    revenue,
  };
});

const defaultActorsView = [0, 1, 2, 3];

const App = () => {
  const [data, setData] = useState({ nodes: [{ id: 0 }], links: [] });

  useEffect(() => {
    setData(createGraphData(defaultActorsView.map((idx) => actors[idx])));
  }, []);

  return (
    <div className="App">
      <ActorPanel
        defaultActors={actors}
        defaultActorsView={defaultActorsView}
        data={data}
        setData={setData}
      />
      <ActorGraph data={data} setData={setData} metadata={metadata} />
    </div>
  );
};

export default App;
