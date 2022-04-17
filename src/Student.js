import React from "react";

export default class Student extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="student">
        <h1>Student: {this.props.name}</h1>
        <h3>Email: {this.props.email}</h3>
      </div>
    );
  }
}
