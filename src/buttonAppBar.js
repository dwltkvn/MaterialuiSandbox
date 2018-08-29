import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Slide from "@material-ui/core/Slide";

const styles = {
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

const appbarDiv = {
  //maxHeight: "100%",
  //overflow: "hidden",
  //flexGrow: 1,
  top: 0,
  position: "fixed",
  border: "magenta",
  borderStyle: "solid",
  borderWidth: "0px",
  width: "100%"
};

class ButtonAppBar extends React.Component {
  constructor(props) {
    super(props);

    //this.callbackFunction = this.callbackFunction.bind(this);
    this.hideComponent = this.hideComponent.bind(this);
    this.handleDirectionChange = this.handleDirectionChange.bind(this);
    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      stateHideComponent: false,
      stateCurrentScrollDir: null
    };
  }

  componentDidMount() {
    this.previousScrollY = window.scrollY;
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(event) {
    let direction = 0;
    window.scrollY > this.previousScrollY ? (direction = 0) : (direction = 1);

    if (this.previousDirection !== direction)
      this.handleDirectionChange(direction);

    this.previousScrollY = window.scrollY;
    this.previsouDirection = direction;
  }

  handleDirectionChange(dir) {
    let stateCurrentScrollDir;
    if (dir === 0) {
      stateCurrentScrollDir = "Down";
      this.hideComponent(true);
    } else {
      stateCurrentScrollDir = "Up";
      this.hideComponent(false);
    }

    this.setState({ stateCurrentScrollDir });
  }

  hideComponent(value) {
    this.setState({ stateHideComponent: value });
  }

  render() {
    const { classes } = this.props;
    const { stateHideComponent } = this.state;

    return (
      <Slide
        direction="down"
        in={!stateHideComponent}
        mountOnEnter
        unmountOnExit
      >
        <div style={appbarDiv}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="title"
                color="inherit"
                className={classes.flex}
              >
                News
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </div>
      </Slide>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
