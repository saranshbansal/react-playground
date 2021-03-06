import React from "react";

class Clock extends React.Component {
  state = {
    time: new Date().toLocaleString()
  };

  componentDidMount() {
    console.log("inside cdm");
    this.intId = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    console.log("inside cwum");
    clearInterval(this.intId);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }

  render() {
    return <span className="clockStyle">{this.state.time}</span>;
  }
}

export default Clock;
