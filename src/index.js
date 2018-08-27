import React from "react";
import ReactDOM from "react-dom";

import ButtonAppBar from "./buttonAppBar";
import SimpleBottomNavigation from "./simpleBottomNavigation";

//import "./styles.css";

const appStyles = {
  border: "red",
  borderStyle: "solid",
  borderWidth: "1px",
  display: "flex",
  flexDirection: "column",
  flex: 1,
  alignItems: "center"
};

const spacer = {
  flexGrow: 1,
  border: "red",
  borderStyle: "solid",
  borderWidth: "1px",
  alignSelf: "center"
};

const App = () => {
  return (
    <div style={appStyles}>
      <ButtonAppBar />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div style={spacer} />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <SimpleBottomNavigation />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
