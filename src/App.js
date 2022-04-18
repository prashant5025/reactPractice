import "./styles.css";
import React from "react";
import Users from "./Users";

export default function App() {
  const [name, setName] = React.useState("Name");

  return (
    <div className="App">
      <h1>Render Method in React</h1>

      <Users />
      {/* <button onClick={()=>setName("Prashant singh")}>Update Name</button> */}
    </div>
  );
}
