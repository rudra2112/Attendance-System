import React from "react";
import "../CSS/CheckIn-CheckOut.css";
import "../CSS/Table.css";

const CheckOut = ({
  studentsData,
  setStudentsData,
  checkInCount,
  setCheckInCount,
}) => {

  /* CheckOut component is used to display the form to check out a student from campus
  and update the check out time of the student in the database */

  const submitHandler = (e) => {
    /* This function is used to handle the submit event of the form
    It checks if the student is already checked out or not
    If not, it updates the check out time of the student in the database*/

    e.preventDefault();
    var ID = e.target.ID.value;
    var flag = 0;
    studentsData.find((student) => {
      if (student.studentId === ID) {
        if (student.checkOutTime !== "-") {
          alert("Student already checked out");
          flag = 1;
        }
        return true;
      }
      alert("Student not checked in");
      flag = 1;
      return false;
    });

    if (flag === 1) {
      return;
    }

    var Time =
      new Date().toLocaleDateString("en-IN", {}) +
      " " +
      new Date().toLocaleTimeString("en-IN", {});
    studentsData.find((student) => {
      if (student.studentId === ID) {
        student.checkOutTime = Time;
        setStudentsData([...studentsData]);
        return true;
      }
      return false;
    });
    setCheckInCount(checkInCount - 2);
    e.target.reset();
  };

  return (
    <div>
      <div className="Heading">Check Out</div>
      <div className="Form-Container">
        <form onSubmit={submitHandler}>
          <div>
            <label>Student ID</label>
            <input
              type="text"
              id="ID"
              placeholder="Enter Student ID"
              required
            />
          </div>
          <button type="submit">Check Out</button>
        </form>
      </div>
      <div className="Table-Container">
        <table className="Table">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Check Out Time</th>
            </tr>
          </thead>
          <tbody>
            {studentsData.map((student) => {
              if (student.checkOutTime !== "-") {
                return (
                  <tr key={student.studentId}>
                    <td>{student.studentId}</td>
                    <td>{student.studentName}</td>
                    <td>{student.checkOutTime}</td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CheckOut;
