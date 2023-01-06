import "./App.css";
import { useState } from "react";
import AppMenu from "./Components/AppMenu.js";
import MainContent from "./Components/MainContent";

function App() {
  const [tab, setTab] = useState("Dashboard");

  return (
    <div className="App">
      <header className="App-header">Attendance System</header>
      <div className="App-body">
        <AppMenu tab={tab} setTab={setTab} />
        <MainContent tab={tab} />
      </div>
    </div>
  );
}

export default App;
