import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function AuthenticatedCalendar() {
  const [value, onChange] = useState(new Date());
  console.log(value);
  return (
    <div>
      <Navbar />
      <div className="CalenderContent">
        <div style={{ marginLeft: "20px" }}>
          <h2>Pick a date!</h2>
          <Calendar
            onChange={onChange}
            value={value}
            className="react-calendar"
            defaultView="year"
          />
        </div>
        <div style={{ marginRight: "20px" }}>
          <h1>Events and Conflicts</h1>
        </div>
      </div>
    </div>
  );
}

export default AuthenticatedCalendar;
