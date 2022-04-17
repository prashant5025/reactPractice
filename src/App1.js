import "./styles.css";

import React, { useState } from "react";

export default function App() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);

  function getData(val) {
    console.log(val.target.value);
    setData(val.target.value);
    setPrint(false);
  }
  return (
    <div className="App">
      <h1>Get Input box value!</h1>
      {print ? <h1>{data}</h1> : null}
      <input type="text" onChange={getData} />
      <button onClick={() => setPrint(true)}>Print Data</button>
    </div>
  );
}
