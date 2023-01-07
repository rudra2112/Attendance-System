import React from "react";
import "../CSS/AppMenu.css";
import dashboardLogo from "../Media/dashboard.png";
import checkInLogo from "../Media/check-in.jpg";
import checkOutLogo from "../Media/check-out.jpg";

const AppMenu = ({ tab, setTab }) => {
  /* AppMenu component is responsible for rendering the menu on the left side of the screen
  It also handles the tab change */

  const handleTabChange = (tabName) => {
    // This function is responsible for changing the tab
    setTab(tabName);
  };

  return (
    //The menu is rendered as a div with 3 divs inside it
    // Each div is a menu item
    // The menu item is highlighted when the tab is selected
    // The menu item is rendered as an image and a text

    <div className="Menu">
      <div
        className="Menu-Item"
        style={
          tab === "Dashboard"
            ? { backgroundColor: "rgb(226, 216, 215)", borderRadius: "8px" }
            : {}
        }
        onClick={() => handleTabChange("Dashboard")}
      >
        <img src={dashboardLogo} alt={<div />} height={"45px"} />
        <span>Dashboard</span>
      </div>
      <div
        className="Menu-Item"
        style={
          tab === "CheckIn"
            ? { backgroundColor: "rgb(226, 216, 215)", borderRadius: "8px" }
            : {}
        }
        onClick={() => handleTabChange("CheckIn")}
      >
        <img src={checkInLogo} alt={<div />} height={"50px"} />
        <span>Check In</span>
      </div>
      <div
        className="Menu-Item"
        style={
          tab === "CheckOut"
            ? { backgroundColor: "rgb(226, 216, 215)", borderRadius: "8px" }
            : {}
        }
        onClick={() => handleTabChange("CheckOut")}
      >
        <img src={checkOutLogo} alt={<div />} height={"40px"} />
        <span>Check Out</span>
      </div>
    </div>
  );
};

export default AppMenu;
