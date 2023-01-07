import "./App.css";
import { useState } from "react";
import AppMenu from "./Components/AppMenu.js";
import MainContent from "./Components/MainContent";

function App() {
  // App component is responsible for rendering the header and the body
  // The body is rendered as a div with 2 divs inside it
  // The first div is the menu and the second div is the main content
  // The main content is rendered based on the tab selected

  const [tab, setTab] = useState("Dashboard"); // State variable for the tab

  return (
    <div className="App">
      <header className="App-header">
        <div>Attendance System</div>
        <div className="Date">{new Date().toLocaleDateString("en-IN", {})}</div>
      </header>
      <div className="App-body">
        <AppMenu tab={tab} setTab={setTab} />
        <MainContent tab={tab} />
      </div>
    </div>
  );
}

export default App;
