import React from "react";

export default class Users extends React.Component {
  constructor() {
    super();
    this.state = { email: "psingh@gmail.com" };
  }

  render() {
    console.warn("Render Method");
    return (
      <div>
        <h1>User Component {this.state.email}</h1>
        <button onClick={() => this.setState({ email: "darkload@gmail.com" })}>
          Update Email
        </button>
      </div>
    );
  }
}
