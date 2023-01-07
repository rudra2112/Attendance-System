import React from "react";
import "../CSS/CheckIn-CheckOut.css";
import "../CSS/Table.css";

const CheckIn = ({ studentsData, setStudentsData }) => {
  /* CheckIn component is used to display the form to check in a student to campus
  and add the student to the database */

  const submitHandler = (e) => {
    /* This function is used to handle the submit event of the form
    It checks if the student is already checked in or not
    If not, it adds the student to the database*/
    
    e.preventDefault();
    var ID = e.target.ID.value;
    var Name = e.target.Name.value;
    var Time =
      new Date().toLocaleDateString("en-IN", {}) +
      " " +
      new Date().toLocaleTimeString("en-IN", {});
    var newStudent = {
      studentId: ID,
      studentName: Name,
      checkInTime: Time,
      checkOutTime: "-",
    };

    var flag = 0;
    studentsData.find((student) => {
      if (student.studentId === ID) {
        alert("Student already checked in");
        flag = 1;
        return true;
      }
      return false;
    });

    if (flag === 1) {
      return;
    }

    setStudentsData([...studentsData, newStudent]);
    e.target.reset();
  };

  return (
    <div>
      <div className="Heading">Check In</div>
      <div className="Form-Container">
        <form onSubmit={submitHandler}>
          <div>
            <label>Student ID</label>
            <input
              type="text"
              id="ID"
              placeholder="Enter Student ID"
              required={true}
            />
          </div>
          <div>
            <label>Student Name</label>
            <input
              type="text"
              id="Name"
              placeholder="Enter Student Name"
              required={true}
            />
          </div>
          <button type="submit">Check In</button>
        </form>
      </div>
      <div className="Table-Container">
        <table className="Table">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Check In Time</th>
            </tr>
          </thead>
          <tbody>
            {studentsData.map((student) => (
              <tr key={student.studentId}>
                <td>{student.studentId}</td>
                <td>{student.studentName}</td>
                <td>{student.checkInTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CheckIn;
