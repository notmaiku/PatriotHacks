import React, { useEffect, useState } from 'react';
import ActorPanel from './ActorPanel/ActorPanel';
import ActorGraph from './ActorGraph';
import { createGraphData } from './utils';

const actors = ['asandler.jpg', 'bpitt.jpg', 'tcruise.jpg', 'thanks.jpg'];

const App = () => {
  const [data, setData] = useState({ nodes: [{ id: 0 }], links: [] });

  useEffect(() => {
    setData(createGraphData(actors));
  }, []);

  const predict = () => {};

  return (
    <div className="App">
      <ActorPanel data={data} setData={setData} />
      <ActorGraph data={data} setData={setData} />
    </div>
  );
};

export default App;
