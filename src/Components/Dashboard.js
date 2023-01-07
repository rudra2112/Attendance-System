import React from "react";
import "../CSS/Dashboard.css";
import "../CSS/Table.css";

const Dashboard = ({ studentsData, checkInCount }) => {
  /* Dashboard component is used to display the total number of students currently in campus 
  and the list of checkin and checkout data of students present in campus */

  return (
    <div>
      <div className="Overview">
        <div className="Title">Total Students Currently in Campus</div>
        <hr className="vl" />
        <div className="Value">{checkInCount}</div>
      </div>
      <div className="Table-Container" style={{ height: "60vh" }}>
        <table className="Table">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Check In</th>
              <th>Check Out</th>
            </tr>
          </thead>
          <tbody>
            {studentsData.map((student) => (
              <tr key={student.studentId}>
                <td>{student.studentId}</td>
                <td>{student.studentName}</td>
                <td>{student.checkInTime}</td>
                <td>{student.checkOutTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
