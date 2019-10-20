import React from 'react';
import { XYPlot, VerticalBarSeries, XAxis, YAxis, LabelSeries } from 'react-vis';
import ActorPanel from '../ActorPanel/ActorPanel';

console.log(ActorPanel.allActors)
class ActorChart extends React.Component {
  render() {
    const data = [
      // { x: 'Adam Sandler', y: 10 },
      // { x: 'Brad Pitt', y: 10 },
      // { x: 'Tom Cruise', y: 10 },
      // { x: 'Tom Hanks', y: 10 },
      {x: 1, y: 10},
      {x: 2, y: 5},
      {x: 3, y: 10},
      {x: 4, y: 10},
    ];
    return (
      <XYPlot class="chart" height={200} width={200}>
        <XAxis />
        <YAxis />
        <VerticalBarSeries data={data} color="#cd3b54" />
      </XYPlot>
    )
  }
}
export default ActorChart;
