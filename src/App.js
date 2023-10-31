import { useState } from "react";
import Info from "./Components/Info";
import InfoInput from "./Components/InfoInput";

function App() {
  const [names, setNames] = useState([
    "Thor",
    "Iron Man",
    "Captain",
    "Audin",
    "Loki",
    "Gamora",
  ]);
  return (
    <div>
      <Info names={names} />
      <InfoInput setNames={setNames} />
    </div>
  );
}

export default App;
