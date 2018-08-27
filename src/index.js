import React from "react";
import ReactDOM from "react-dom";

import Button from "@material-ui/core/Button";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Button variant="outlined" color="primary">
        Default
      </Button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
