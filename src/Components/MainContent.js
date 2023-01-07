import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard.js";
import CheckIn from "./CheckIn.js";
import CheckOut from "./CheckOut.js";

const MainContent = ({ tab }) => {
  // MainContent component is responsible for rendering the main content
  // The main content is rendered based on the tab selected
  // The main content is rendered as a div with 3 divs inside it
  // The first div is the Dashboard, the second div is the CheckIn and the third div is the CheckOut
  // The Dashboard, CheckIn and CheckOut components are rendered based on the tab selected

  const [studentsData, setStudentsData] = useState([]); // State variable for the students data
  const [checkInCount, setCheckInCount] = useState(-1); // State variable for the check in count

  useEffect(() => {
    // This useEffect is responsible for incrementing the check in count when the students data is updated
    setCheckInCount(checkInCount + 1);
  }, [studentsData]);

  return (
    <div
      className="Main-Content"
      style={{
        backgroundColor: "#FCF6F5FF",
        margin: "1vh 0vw",
        boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.501)",
        borderRadius: "10px",
        padding: "20px",
        width: "81.5%",
        textAlign: "left",
      }}
    >
      {tab === "Dashboard" ? (
        <Dashboard studentsData={studentsData} checkInCount={checkInCount} />
      ) : (
        <></>
      )}
      {tab === "CheckIn" ? (
        <CheckIn
          studentsData={studentsData}
          setStudentsData={setStudentsData}
        />
      ) : (
        <></>
      )}
      {tab === "CheckOut" ? (
        <CheckOut
          studentsData={studentsData}
          setStudentsData={setStudentsData}
          checkInCount={checkInCount}
          setCheckInCount={setCheckInCount}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default MainContent;
