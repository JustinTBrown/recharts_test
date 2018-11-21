import React from "react";
import ReactDOM from "react-dom";
import { ResponsiveContainer, LineChart, Line, YAxis, Tooltip } from "recharts";

import "./styles.scss";

// Reference example: https://jsfiddle.net/alidingling/xqjtetw0/

const data1 = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 }
];

const data2 = [
  { name: "Page A", uv: 3000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3040, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2100, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2790, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1590, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2590, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3480, pv: 4300, amt: 2100 }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data1
    };
  }

  switchData = dataSet => {
    this.setState({
      data: dataSet
    });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data} width={500} height={300}>
            <Line
              type="monotone"
              dataKey="uv"
              stroke="tomato"
              strokeWidth={2}
            />
            <YAxis hide domain={["dataMin - 100", "dataMax + 100"]} />
          </LineChart>
        </ResponsiveContainer>
        <button onClick={() => this.switchData(data1)}>View Data 1</button>
        <button onClick={() => this.switchData(data2)}>View Data 2</button>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
