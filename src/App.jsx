import React, { useEffect, useState } from 'react';
import ActorPanel from './ActorPanel/ActorPanel';
import ActorGraph from './ActorGraph';
import { createGraphData } from './utils';

const actors = [
  { name: 'Adam Sandler', image: 'asandler.jpg' },
  { name: 'Brad Pitt', image: 'bpitt.jpg' },
  { name: 'Tom Cruise', image: 'tcruise.jpg' },
  { name: 'Tom Hanks', image: 'thanks.jpg' },
  { name: 'Tom fewaf', image: 'thanks.jpg' },
];

const defaultActorsView = [0, 1, 2, 3];

const App = () => {
  const [data, setData] = useState({ nodes: [{ id: 0 }], links: [] });

  useEffect(() => {
    setData(createGraphData(defaultActorsView.map((idx) => actors[idx])));
  }, []);

  const predict = () => {};

  return (
    <div className="App">
      <ActorPanel
        defaultActors={actors}
        defaultActorsView={defaultActorsView}
        data={data}
        setData={setData}
      />
      <ActorGraph data={data} setData={setData} />
    </div>
  );
};

export default App;
