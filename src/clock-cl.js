import { Component } from "react";

class Clock_cl extends Component {
  constructor() {
    super();
    console.log("constructor runs");
    this.state = { date: new Date() };
  }
  componentWillMount() {
    console.log("component will mount");
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    console.log("render");

    return (
      <>
        <h1>Clock is in a Class Component</h1>
        <div> {this.state.date.toLocaleTimeString()} </div>
      </>
    );
  }
  componentDidMount() {
    console.log("component did mount");
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    console.log("component will UNMOUNTED");
    clearInterval(this.timerId);
  }
}

export default Clock_cl;
