import React from "react";
import PropTypes from "prop-types";

import ButtonAppBar from "./buttonAppBar";
import SimpleBottomNavigation from "./simpleBottomNavigation";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

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

const styles = theme => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }
});

class App extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    //this.callbackFunction = this.callbackFunction.bind(this);
  }

  render() {
    /* code */
    const { classes } = this.props;

    return (
      <div style={App.appStyles}>
        <ButtonAppBar />

        <div style={App.contentStyles}>
          <h1>CodeSandbox</h1>
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
        <Button
          variant="fab"
          color="primary"
          aria-label="Add"
          className={classes.fab}
        >
          <AddIcon />
        </Button>
        <SimpleBottomNavigation />
      </div>
    );
  }
}

App.propTypes = {
  //classes: PropTypes.object.isRequired
};

App.contentStyles = {
  marginTop: 0
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

export default withStyles(styles)(App);
