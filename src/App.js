import { useState } from "react";
// import Info from "./Components/Info";
import InfoInput from "./Components/InfoInput";
import Info from "./Components/Info";
import Account from "./Pages/Account";
import Home from "./Pages/Home/Home";

function App() {
  const [names, setNames] = useState([
    "Thor",
    "Iron Man",
    "Captain",
    "Audin",
    "Loki",
    "Gamora",
  ]);
  // return (
  //   <div>
  //     <Info names={names} />
  //     <InfoInput setNames={setNames} />
  //   </div>
  // );

  return (
    <div className="phone:text-xs">
      <Home />
      <Account />
      <Info names={names} />
      <InfoInput setNames={setNames} />
    </div>
  );
}

export default App;
