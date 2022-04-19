import "./styles.css";
import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { name: "...", email: "xyz@gmail.com", address: "..." };
  }
  componentDidMount() {
    console.warn("componentDidMount");
  }

  render() {
    console.warn("render");

    return (
      <div className="App">
        <div className="container">
          <h1>Component Did Mount</h1>
          <h2>
            Name: <span className="answer">{this.state.name} </span>
          </h2>
          <h2>
            Email: <span className="answer">{this.state.email}</span>
          </h2>
          <h2>
            Address: <span className="answer">{this.state.address}</span>
          </h2>
        </div>

        <button
          onClick={() => {
            this.setState({
              name: "prashant singh",
              email: "psingh@gmail.com",
              address: "H.No. 474 Bank coloy hapur 245101"
            });
          }}
        >
          Update Name
        </button>
      </div>
    );
  }
}
