import React from 'react';
import ActorPanel from './ActorPanel/ActorPanel';
import ActorGraph from './ActorGraph';

const data = [
  { date: 0, value: 45.595735253715674 },
  { date: 1, value: 76.35076470681564 },
  { date: 2, value: 47.05292953738223 },
  { date: 3, value: 88.90846188204904 },
  { date: 4, value: 4.664368188069368 },
];

const App = () => (
  <div className="App">
    <ActorPanel />
    <ActorGraph
      data={data}
      width={200}
      height={200}
      innerRadius={60}
      outerRadius={100}
    />
  </div>
);

export default App;
