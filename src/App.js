import "./styles.css";
import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { name: "Name" };
  }
  componentDidMount() {
    console.warn("componentDidMount");
  }

  render() {
    console.warn("render");

    return (
      <div className="App">
        <h1>Component Did Mount</h1>
        <h1>Name: {this.state.name}</h1>

        <button
          onClick={() => {
            this.setState({ name: "prashant singh" });
          }}
        >
          Update Name
        </button>
      </div>
    );
  }
}
