import * as React from "react";

const PLACEHOLDER: string = "Draw something on the board";

interface AppProps {
  result: Array<object>
}

const App: React.FC<AppProps> = (props) => (
  <div>
    <h1>Label</h1>
    <h2>{props.result.length === 0 ? PLACEHOLDER : "Report: "}</h2>
  </div>
);

export default App;
