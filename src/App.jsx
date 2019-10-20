import React, { useEffect, useState } from 'react';
import ActorPanel from './ActorPanel/ActorPanel';
import ActorGraph from './ActorGraph';
import { createGraphData } from './utils';

const actors = [
  {
    name: 'Adam Sandler',
    image: 'asandler.jpg',
    budget: 11000000,
    revenue: 89843733
  },
  { name: 'Brad Pitt', image: 'bpitt.jpg', budget: 65000000, revenue: 7847000 },
  {
    name: 'Daisy Ridley',
    image: 'dridley.jpg',
    budget: 245000000,
    revenue: 2068223624
  },
  {
    name: 'Elizabeth Olsen',
    image: 'eolsen.jpg',
    budget: 80000000,
    revenue: 274470394
  },
  {
    name: 'Emma Watson',
    image: 'ewatson.jpg',
    budget: 50000000,
    revenue: 122915111
  },
  {
    name: 'Jennifer Lawrence',
    image: 'jlawrence.jpg',
    budget: 30000000,
    revenue: 62616646
  },
  {
    name: 'Hugh Jackman',
    image: 'hjackman.jpg',
    budget: 50000000,
    revenue: 55969000
  },
  {
    name: 'Ryan Reynolds',
    image: 'rreynolds.jpg',
    budget: 11000000,
    revenue: 89843733
  },
  {
    name: 'Scarlett Johansson',
    image: 'sjohansson.jpeg',
    budget: 967686,
    revenue: 4270000
  },
  {
    name: 'Tom Cruise',
    image: 'tcruise.jpg',
    budget: 66000000,
    revenue: 177584879
  },
  {
    name: 'Tom Hanks',
    image: 'thanks.jpg',
    budget: 250000000,
    revenue: 1021103568
  }
];

const metadata = {};

actors.forEach(({ name, image, budget, revenue }) => {
  metadata[image] = {
    name,
    budget,
    revenue
  };
});

const defaultActorsView = [0, 1, 2, 3];

const App = () => {
  const [data, setData] = useState({ nodes: [{ id: 0 }], links: [] });

  useEffect(() => {
    setData(createGraphData(defaultActorsView.map(idx => actors[idx])));
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
