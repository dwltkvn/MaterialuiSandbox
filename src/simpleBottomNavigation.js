import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Slide from "@material-ui/core/Slide";

const styles = {
  root: {
    width: "100%"
  }
};

const navAppBar = {
  bottom: 0,
  position: "fixed",
  width: "100%",
  /*border: "red",
  borderStyle: "solid",
  borderWidth: "1px",*/
  display: "flex",
  justifyContent: "center"
};

class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0
  };

  constructor(props) {
    super(props);

    //this.callbackFunction = this.callbackFunction.bind(this);
    this.hideComponent = this.hideComponent.bind(this);
    this.handleDirectionChange = this.handleDirectionChange.bind(this);
    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      stateHideComponent: false,
      stateCurrentDir: null
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
    let stateCurrentDir;
    if (dir === 0) {
      stateCurrentDir = "Down";
      this.hideComponent(true);
    } else {
      stateCurrentDir = "Up";
      this.hideComponent(false);
    }

    this.setState({ stateCurrentDir });
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  hideComponent(value) {
    this.setState({ stateHideComponent: value });
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    const { stateHideComponent } = this.state;

    return (
      <Slide direction="up" in={!stateHideComponent} mountOnEnter unmountOnExit>
        <div style={navAppBar}>
          <BottomNavigation
            value={value}
            onChange={this.handleChange}
            showLabels
            className={classes.root}
          >
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
          </BottomNavigation>
        </div>
      </Slide>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleBottomNavigation);
