import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";

function AuthenticatedCalendar() {
  const [value, onChange] = useState(new Date());
  const month = value.getMonth() + 1;
  console.log(month);
  return (
    <div>
      <Navbar />
      <div className="CalenderContent">
        <div style={{ marginLeft: "20px" }}>
          <h1>Pick a date!</h1>
          <Calendar
            onChange={onChange}
            value={value}
            className="react-calendar"
            defaultView="year"
          />
        </div>
        <div
          style={{
            marginLeft: "40px",
            flex: "1",
            display: "flex",
          }}
        >
          <h1>Events and Conflicts</h1>
        </div>
      </div>
    </div>
  );
}

export default AuthenticatedCalendar;
