import React from "react";
import PropTypes from "prop-types";

import ButtonAppBar from "./buttonAppBar";
import SimpleBottomNavigation from "./simpleBottomNavigation";

//const CmpntStateless = props => <div>{props.children}</div>;

/*
const CmpntStateless2 = props =>  {
                                    const var = 0;
                                    return (
                                      <div>{props.children}</div>
                                    );
                                  }
*/

/*
const CmpntStateless3 = props => {
                                    return props.myProp? <div>{props.children}</div> : <div>{props.children}</div>
                                 }
*/

class App extends React.Component {
  state = {};

  constructor(props) {
    super(props);

    //this.callbackFunction = this.callbackFunction.bind(this);

    /*
      this.state =
      {
          field1 : value1,
          field2 : value2,
      }
    */
  }

  render() {
    /* code */

    return (
      <div style={App.appStyles}>
        <ButtonAppBar />
        <div>
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
          <h2>Start editing to see some magic happen!</h2>
          <h2>Start editing to see some magic happen!</h2>
          <h2>Start editing to see some magic happen!</h2>
          <h2>Start editing to see some magic happen!</h2>
          <h2>Start editing to see some magic happen!</h2>
          <h2>Start editing to see some magic happen!</h2>
          <h2>Start editing to see some magic happen!</h2>
          <h2>Start editing to see some magic happen!</h2>
          <h2>Start editing to see some magic happen!</h2>
          <h2>Start editing to see some magic happen!</h2>
          <h2>Start editing to see some magic happen!</h2>
          <h2>Start editing to see some magic happen!</h2>
          <h2>Start editing to see some magic happen!</h2>
          <h2>Start editing to see some magic happen!</h2>
          <h2>Start editing to see some magic happen!</h2>
          <h2>Start editing to see some magic happen!</h2>
          <h2>Start editing to see some magic happen!</h2>
          <h2>Start editing to see some magic happen!</h2>
          <h2>Start editing to see some magic happen!</h2>
          <h2>Start editing to see some magic happen!</h2>
          <h2>Start editing to see some magic happen!</h2>
          <h2>Start editing to see some magic happen!</h2>
          <h2>Start editing to see some magic happen!</h2>
          <h2>Start editing to see some magic happen!</h2>
          <h2>Start editing to see some magic happen!</h2>
          <h2>Start editing to see some magic happen!</h2>
          <h2>Start editing to see some magic happen!</h2>
          <h2>Start editing to see some magic happen!</h2>
          <h2>Start editing to see some magic happen!</h2>
          <h2>Start editing to see some magic happen!</h2>
          <h2>Start editing to see some magic happen!</h2>
          <h2>Start editing to see some magic happen!</h2>
          <h2>Start editing to see some magic happen!</h2>
          <h2>Start editing to see some magic happen!</h2>
          <h2>Start editing to see some magic happen!</h2>
          <h2>Start editing to see some magic happen!</h2>
          <h2>Start editing to see some magic happen!</h2>
          <h2>Start editing to see some magic happen!</h2>
          <h2>Start editing to see some magic happen!</h2>
        </div>
        <div style={App.spacer} />
        <SimpleBottomNavigation />
      </div>
    );
  }
}

App.propTypes = {
  //classes: PropTypes.object.isRequired
};

App.appStyles = {
  border: "red",
  borderStyle: "solid",
  borderWidth: "0px",
  display: "flex",
  flexDirection: "column",
  flex: 1,
  alignItems: "center"
};

App.spacer = {
  flexGrow: 1,
  border: "gray",
  borderStyle: "solid",
  borderWidth: "0px",
  alignSelf: "center"
};

export default App;
