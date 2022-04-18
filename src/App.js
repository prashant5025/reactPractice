import "./styles.css";
import User from "./User";
import Members from "./Members";

export default function App() {
  function getData() {
    alert("hello from App");
  }

  return (
    <div className="App">
      <User data={getData} />
      <div style={{ float: "right" }}>
        <Members data={getData} />
      </div>
    </div>
  );
}
